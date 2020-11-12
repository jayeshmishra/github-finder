// Brad Traversy's
// client id
// this.client_id = 'd9308aacf8b204d361fd';
// client secret
// this.client_secret = '84969aeef73956f4ec9e8716d1840532802bb81b';


// MY client id
// fb68c3e2c7558f03e224
// MY client secret id
// 226e1e829282218d0cf1937d380c86cba96fa092

class Github {
  constructor() {
    this.client_id = 'fb68c3e2c7558f03e224';
    this.client_secret = '226e1e829282218d0cf1937d380c86cba96fa092';
    this.repos_count=5;
    this.repos_sort='created:asc';
  }

  async getUser(user) {
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);

    const repoResponse=await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secret=${this.client_secret}`);
    
    const profile = await profileResponse.json();

    const repos=await repoResponse.json();
    return {
      profile,
      repos
    }
  }
}  