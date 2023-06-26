module.exports = {
  branches: [{ name: 'v4', channel: 'prerelease-v4', range: '4.x'  }, { name: 'main', channel: 'prerelease', prerelease: 'prerelease' }],
  analyzeCommits: {
    preset: 'angular'
  },
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm'
  ],
  tagFormat: 'prerelease-v${version}',
  dryRun: true
};