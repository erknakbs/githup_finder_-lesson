class UI {
    constructor() {
        this.profile = document.getElementById("profile")
    }

    // Profil arayüzünü ekrana Basma

    showProfile(user) {
        const created_at = new Date(user.created_at).toLocaleDateString();

        this.profile.innerHTML = `
        <div class="container border my-4 p-4">
            <div class="row">
                <div class="col-md-3">
                    <img class="img-fluid" src="${user.avatar_url}" alt="">
                    <a href="${user.html_url}" target="_blank" class="btn btn-primary my-4 w-100">View Profile</a>
                </div>

                <div class="col-md-9">
                    <span class="badge bg-primary fs-6 mt-1">Open Repos: ${user.public_repos}</span>
                    <span class="badge bg-secondary fs-6 mt-1">Open Gists: ${user.public_gists}</span>
                    <span class="badge bg-success fs-6 mt-1">Followers: ${user.followers}</span>
                    <span class="badge bg-info fs-6 mt-1">Following: ${user.following}</span>

                    <ul class="list-group my-5">
                        <li class="list-group-item">About: ${user.bio}</li>
                        <li class="list-group-item">Company: ${user.company}</li>
                        <li class="list-group-item">Website: ${user.blog}</li>
                        <li class="list-group-item">Location: ${user.location}</li>
                        <li class="list-group-item">Account Creation Date: ${created_at}</li >
                    </ul >
                </div >
            </div >
        </div >


        
        <div class="container p-3" id="repos">
        
        </div>
        `;
    }

    showRepos(repos) {
        let output = `
        <h3 class="fs-1">Latest Repos</h3>
        `;

        repos.forEach((repo) => {

            output += `
        <div class="border p-3 mb-4">
            <div class="row">
                <div class="col-md-6">
                    <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                </div>
                <div class="col-md-6">
                    <span class="badge bg-primary">Yıldız: ${repo.stargazers_count}</span>
                    <span class="badge bg-secondary">İzleyenler: ${repo.watchers_count}</span >
                <span class="badge bg-success">Fork'lar: ${repo.forks_count}</span>
                </div >
            </div >
        </div >
        `;
        });

        // html'e gönderme
        document.getElementById('repos').innerHTML = output;
    }

    // uyarı mesajı oluşturma

    showAlert(message, classname) {
        // div oluşturma 
        const div = document.createElement('div');
        // class ekleme

        div.className = classname;

        // yazıyı ekleme
        div.innerText = message;

        // göndereceğimiz yerin elemanını alma
        const outlet = document.getElementById("alert");

        // html gönderme 
        outlet.appendChild(div);

        setTimeout(() => {
            // alerti 4 saniye sonra kaldır
            this.clearAlert();
        }, 4000)
    }

    // Uyarıyı ekrandan Silme
    clearAlert() {
        // ekrandaki alert
        const curruntAlert = document.querySelector('.alert');
        // aler var ise aleri kaldır
        if (curruntAlert) {
            curruntAlert.remove();
        }
    }
    // Arayüz temizleme
    clearProfile() {
        this.profile.innerHTML = '';
    }
}

export default UI;