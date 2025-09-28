export type PRItem = {
  id: number;
  title: string;
  url: string;
  created_at: string;
  state: string;
  repo: string;
  number: number;
  merged_at?: string | null;
};

// Fetch PRs authored by `author` within a GitHub org using Search API.
// Falls back to empty list if network/rate limit fails.
export async function fetchOrgPRs(author: string, org: string): Promise<PRItem[]> {
  const q = encodeURIComponent(`is:pr author:${author} org:${org}`);
  const url = `https://api.github.com/search/issues?q=${q}&per_page=50&sort=created&order=desc`;

  const headers: Record<string, string> = { Accept: "application/vnd.github+json" };
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`;

  try {
    const res = await fetch(url, { headers, next: { revalidate: 3600 } });
    if (!res.ok) throw new Error(`GitHub API error ${res.status}`);
    const data: any = await res.json();
    const items: PRItem[] = (data.items || []).map((it: any) => ({
      id: it.id,
      title: it.title,
      url: it.html_url,
      created_at: it.created_at,
      state: it.state,
      repo: (it.repository_url || "").split("repos/")[1] || "",
      number: it.number,
      merged_at: it.pull_request?.merged_at ?? null,
    }));
    return items;
  } catch {
    return [];
  }
}

