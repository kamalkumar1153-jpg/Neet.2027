onValue(questionsRef, (snapshot) => {
    const data = snapshot.val();
    console.log("Firebase se data aaya:", data); // Check karne ke liye
    if (data) {
        allQuestions = Object.values(data);
        window.filterQuestions('All'); 
    } else {
        alert("Database se data nahi mil raha! Path check karein.");
        document.getElementById("questionText").innerText = "Database error!";
    }
}, (error) => {
    alert("Firebase connection error: " + error.message);
});







