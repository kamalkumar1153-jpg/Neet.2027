// Bulk Upload Function
async function bulkUpload(subjectName, questionsArray) {
    console.log(`Starting upload for ${subjectName}...`);
    
    const ref = db.ref("questions/" + subjectName);
    
    for (let q of questionsArray) {
        try {
            await ref.push(q);
            console.log("Uploaded: " + q.q.substring(0, 20) + "...");
        } catch (error) {
            console.error("Error uploading question:", error);
        }
    }
    
    alert(`✅ ${subjectName} के सभी सवाल सफलतापूर्वक अपलोड हो गए!`);
}

// इसे चलाने के लिए: bulkUpload("biology", biologyQuestions);
