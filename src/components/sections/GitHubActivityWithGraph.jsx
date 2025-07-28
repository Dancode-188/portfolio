// Enhanced version with contribution graph support
// To use this, you need to:
// 1. Create a GitHub Personal Access Token
// 2. Add it to your environment variables as VITE_GITHUB_TOKEN
// 3. Uncomment the code below and replace the simple version

import { useEffect, useState } from 'react';
import { Calendar, GitCommit, Activity, AlertCircle } from 'lucide-react';
import ScrollReveal from '../ui/ScrollReveal';

const GitHubActivityWithGraph = () => {
  const [stats, setStats] = useState({ 
    totalContributions: 0, 
    totalRepositories: 0,
    followers: 0,
    currentStreak: 0
  });
  const [contributions, setContributions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const GITHUB_USERNAME = 'Dancode-188';
  const GITHUB_TOKEN = import.meta.env.VITE_GITHUB_TOKEN; // Add your token to .env

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setLoading(true);

        // If we have a token, fetch contribution graph
        if (GITHUB_TOKEN) {
          const query = `
            query($username: String!) {
              user(login: $username) {
                contributionsCollection {
                  contributionCalendar {
                    totalContributions
                    weeks {
                      contributionDays {
                        contributionCount
                        date
                      }
                    }
                  }
                  contributionYears
                }
                repositories {
                  totalCount
                }
                followers {
                  totalCount
                }
              }
            }
          `;

          const response = await fetch('https://api.github.com/graphql', {
            method: 'POST',
            headers: {
              'Authorization': `Bearer ${GITHUB_TOKEN}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              query,
              variables: { username: GITHUB_USERNAME }
            })
          });

          if (!response.ok) throw new Error('Failed to fetch GitHub data');
          
          const data = await response.json();
          const userData = data.data.user;
          
          // Process contribution data
          const weeks = userData.contributionsCollection.contributionCalendar.weeks;
          const processedWeeks = weeks.map(week => 
            week.contributionDays.map(day => {
              if (day.contributionCount === 0) return 0;
              if (day.contributionCount <= 3) return 1;
              if (day.contributionCount <= 6) return 2;
              if (day.contributionCount <= 9) return 3;
              return 4;
            })
          );
          
          setContributions(processedWeeks);
          setStats({
            totalContributions: userData.contributionsCollection.contributionCalendar.totalContributions,
            totalRepositories: userData.repositories.totalCount,
            followers: userData.followers.totalCount,
            currentStreak: calculateStreak(weeks)
          });
        } else {
          // Fallback to REST API without token
          const userResponse = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`);
          if (!userResponse.ok) throw new Error('Failed to fetch user data');
          const userData = await userResponse.json();
          
          setStats({
            totalContributions: userData.public_repos * 50, // Rough estimate
            totalRepositories: userData.public_repos,
            followers: userData.followers,
            currentStreak: 0
          });
        }
        
      } catch (err) {
        setError(err.message);
        console.error('GitHub API Error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  const calculateStreak = (weeks) => {
    let streak = 0;
    const allDays = weeks.flatMap(week => week.contributionDays).reverse();
    
    for (const day of allDays) {
      if (day.contributionCount > 0) {
        streak++;
      } else {
        break;
      }
    }
    
    return streak;
  };

  const getColorClass = (level) => {
    const colors = [
      'bg-slate/20',         // 0 - No contributions
      'bg-secondary/20',     // 1 - Low
      'bg-secondary/40',     // 2 - Medium
      'bg-secondary/60',     // 3 - High
      'bg-secondary/80',     // 4 - Very High
    ];
    return colors[level] || colors[0];
  };

  if (loading) {
    return (
      <section className="py-20 md:py-32 bg-primary/30">
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

  return (
    <section className="py-20 md:py-32 bg-primary/30">
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
            {/* Stats Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <div className="flex items-center justify-center text-secondary mb-2">
                  <GitCommit className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-text">{stats.totalContributions}</p>
                <p className="text-sm text-slate">Contributions this year</p>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center text-secondary mb-2">
                  <Calendar className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-text">{stats.currentStreak}</p>
                <p className="text-sm text-slate">Day streak</p>
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
                  <Activity className="w-5 h-5" />
                </div>
                <p className="text-2xl font-bold text-text">2</p>
                <p className="text-sm text-slate">Major Projects</p>
              </div>
            </div>

            {/* Contribution Graph - Only show if we have the data */}
            {contributions.length > 0 && (
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-slate mb-4">Contribution Graph</h3>
                <div className="overflow-x-auto">
                  <div className="min-w-max">
                    <div className="flex items-center gap-1 mb-2">
                      <span className="text-xs text-slate mr-2">Less</span>
                      {[0, 1, 2, 3, 4].map((level) => (
                        <div
                          key={level}
                          className={`w-3 h-3 rounded-sm ${getColorClass(level)}`}
                        />
                      ))}
                      <span className="text-xs text-slate ml-2">More</span>
                    </div>
                    
                    <div className="flex gap-1">
                      {contributions.map((week, weekIndex) => (
                        <div key={weekIndex} className="flex flex-col gap-1">
                          {week.map((day, dayIndex) => (
                            <div
                              key={`${weekIndex}-${dayIndex}`}
                              className={`w-3 h-3 rounded-sm ${getColorClass(day)} 
                                        hover:ring-2 hover:ring-secondary transition-all cursor-pointer`}
                              title={`Contributions on this day`}
                            />
                          ))}
                        </div>
                      ))}
                    </div>

                    <div className="flex justify-between mt-2 text-xs text-slate">
                      <span>Jan</span>
                      <span>Apr</span>
                      <span>Jul</span>
                      <span>Oct</span>
                      <span>Dec</span>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="text-center">
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

export default GitHubActivityWithGraph;