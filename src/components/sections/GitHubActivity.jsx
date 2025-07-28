import { useEffect, useState } from 'react';
import { Calendar, GitCommit, Activity, AlertCircle } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const GitHubActivity = () => {
  const [stats, setStats] = useState({ 
    totalContributions: 0, 
    totalRepositories: 0,
    followers: 0,
    publicRepos: 0
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Your GitHub username
  const GITHUB_USERNAME = 'Dancode-188';
  
  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);
        
        // Fetch user data
        const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user data');
        const userData = await userResponse.json();
        
        // Fetch repositories
        const reposResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();
        
        // Calculate total commits (approximate)
        let totalCommits = 0;
        const recentRepos = reposData.slice(0, 10); // Check last 10 updated repos
        
        for (const repo of recentRepos) {
          try {
            const commitsResponse = await fetch(
              `https://api.github.com/repos/${GITHUB_USERNAME}/${repo.name}/commits?author=${GITHUB_USERNAME}&per_page=1`
            );
            
            if (commitsResponse.ok) {
              // Get total from Link header
              const linkHeader = commitsResponse.headers.get('Link');
              if (linkHeader) {
                const match = linkHeader.match(/page=(\d+)>; rel="last"/);
                if (match) {
                  totalCommits += parseInt(match[1]);
                }
              }
            }
          } catch (err) {
            console.log(`Couldn't fetch commits for ${repo.name}`);
          }
        }
        
        setStats({
          totalContributions: totalCommits || reposData.length * 10, // Estimate if no commit data
          totalRepositories: reposData.length,
          followers: userData.followers,
          publicRepos: userData.public_repos
        });
        
      } catch (err) {
        setError(err.message);
        console.error('GitHub API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  if (loading) {
    return (
      <section id="github" className="py-20 md:py-32 bg-primary/30">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center">
            <div className="animate-pulse">
              <div className="h-8 bg-slate/20 rounded w-48 mx-auto mb-4"></div>
              <div className="h-4 bg-slate/20 rounded w-64 mx-auto"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section id="github" className="py-20 md:py-32 bg-primary/30">
        <div className="max-w-6xl mx-auto px-6">
          <ScrollReveal>
            <div className="bg-primary border border-red-500/20 rounded-lg p-6 text-center">
              <AlertCircle className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <p className="text-slate">Unable to load GitHub data at the moment.</p>
              <a 
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-secondary hover:underline mt-2 inline-block"
              >
                View my GitHub profile directly →
              </a>
            </div>
          </ScrollReveal>
        </div>
      </section>
    );
  }

  return (
    <section id="github" className="py-20 md:py-32 bg-primary/30">
      <div className="max-w-6xl mx-auto px-6">
        <ScrollReveal>
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-text mb-4">
              GitHub Activity
            </h2>
            <p className="text-slate text-lg">
              Building consistently since December 2022
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          <div className="bg-primary border border-slate/20 rounded-lg p-6 md:p-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center text-secondary mb-2">
                  <GitCommit className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-text">{stats.totalContributions}+</p>
                <p className="text-sm text-slate">Total Commits</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-secondary mb-2">
                  <Activity className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-text">{stats.totalRepositories}</p>
                <p className="text-sm text-slate">Repositories</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-secondary mb-2">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-text">2.5</p>
                <p className="text-sm text-slate">Years Active</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-secondary mb-2">
                  <Activity className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-text">2</p>
                <p className="text-sm text-slate">Major Projects</p>
              </div>
            </div>

            {/* Activity Summary */}
            <div className="bg-primary/50 rounded-lg p-6 border border-slate/10">
              <h3 className="text-lg font-semibold text-text mb-4">Recent Activity Highlights</h3>
              <ul className="space-y-3">
                <li className="flex items-start text-slate">
                  <span className="text-secondary mr-3 mt-1">▹</span>
                  <span>Actively maintaining Asynova platform with regular commits</span>
                </li>
                <li className="flex items-start text-slate">
                  <span className="text-secondary mr-3 mt-1">▹</span>
                  <span>Built Intent Analysis System with 4 microservices</span>
                </li>
                <li className="flex items-start text-slate">
                  <span className="text-secondary mr-3 mt-1">▹</span>
                  <span>Contributing to personal projects and exploring new technologies</span>
                </li>
              </ul>
            </div>

            {/* Call to Action */}
            <div className="mt-6 text-center">
              <a 
                href={`https://github.com/${GITHUB_USERNAME}`}
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center text-secondary hover:underline"
              >
                View my full contribution history on GitHub →
              </a>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default GitHubActivity;