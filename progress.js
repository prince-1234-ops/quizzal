function addXP(xpEarned) {

    let totalXP = Number(localStorage.getItem("totalXP")) || 0;

    totalXP += xpEarned;

    localStorage.setItem("totalXP", totalXP);

}