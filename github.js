class Github {
    constructor() {
        this.client_id = 'e06db7ed7088c66cbdc1';
        this.client_secret = 'e175b739298c08dfb271c1ce232119351d475ee6';
        this.repos_count = 10;
        this.repos_sort = 'asc';
    }

    async getUser(user) {
        // gelen userla beraber istek atma
        const profileResponse = await fetch(
            `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
        );

        // Kullanıcının repolarını çekme
        const repoResponse = await fetch(
            `https://api.github.com/users/${user}/repos?per_page=10&sort=${this.repos_count}$sort=${this.repos_sort}&client_id=${this.client_id}`);

        // gelen cevabı jsona çevirme
        const profile = await profileResponse.json();
        const repos = await repoResponse.json();
        console.log(repos);
        // işlenmiş veriyi fonksiyonun çağrıldığı yere gönderme
        return {
            profile,
            repos,
        };
    }
}

export default Github;