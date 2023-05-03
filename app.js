import Github from './github.js';
import UI from './ui.js';
// github ve ui classlarının bir örneğini oluşturma.
const github = new Github();
const ui = new UI();

// HTML ALınanlar
const searchUser = document.getElementById('search-user');
const searchButton = document.getElementById('search-button');

// eğer ara butonuna tıklanırsa
searchButton.addEventListener("click", getInput);
//eğer enter tuşuna tıklanılırsa
searchUser.addEventListener("keypress", (e) => {
    if (e.code === "Enter") {
        getInput()
    }
});

function getInput() {
    // eğer input içi doluysa Api isteği at
    if (searchUser.value !== '') {
        github.getUser(searchUser.value).then((data) => {
            if (data.profile.message === 'Not Found') {
                // hata mesajı göster
                ui.showAlert('User Not Found.', 'alert alert-danger');
            } else {
                ui.showAlert('User successfully', 'alert alert-success');
                // kullanıcyı göster
                ui.showProfile(data.profile);
                // projeleri göster
                ui.showRepos(data.repos);
            }
        });
    } else {
        // eğer input boş ise uyarı ver
        ui.showAlert('User Not Found.', 'alert alert-info');
        ui.clearProfile();
    }
}

// theme

const themeBtn = document.getElementById("theme")

themeBtn.addEventListener("click", changeTheme)

function changeTheme() {
    const body = document.querySelector('body');
    body.classList.toggle('bg-dark');
    body.classList.toggle('text-bg-dark');
}
