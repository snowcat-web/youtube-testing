export default function LoginStatus() {
    var status = localStorage.getItem("USER-APP") ? JSON.parse(localStorage.getItem("USER-APP")) : null
    return status;
}