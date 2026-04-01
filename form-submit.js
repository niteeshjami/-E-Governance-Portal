// ============================================================
//  form-submit.js  —  Reusable form submission helper
//  Used by: death, aadhaar, marriage, passport, community,
//           healthcare, tax, education, license pages
// ============================================================

function toBase64(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

async function submitToFirebase(serviceData) {
  const btn = document.getElementById("submitBtn");
  const msg = document.getElementById("msg");
  btn.disabled = true;
  btn.textContent = "Submitting...";
  msg.style.color = "blue";
  msg.textContent = "Please wait...";

  const appID = "GOV" + Math.floor(Math.random() * 900000 + 100000);

  // Handle optional file upload
  const fileInput = document.getElementById("userFile");
  let fileData = "";
  if (fileInput && fileInput.files.length > 0) {
    fileData = await toBase64(fileInput.files[0]);
  }

  const application = {
    ...serviceData,
    id: appID,
    status: "Pending",
    reason: "",
    certificate: "",
    userFile: fileData,
    submittedAt: firebase.firestore.FieldValue.serverTimestamp()
  };

  try {
    await db.collection("applications").doc(appID).set(application);
    msg.style.color = "green";
    msg.textContent = "✅ Submitted! Your Application ID: " + appID;
    alert("Application Submitted Successfully\nApplication ID: " + appID);
    window.location.href = "track.html";
  } catch (e) {
    msg.style.color = "red";
    msg.textContent = "❌ Error saving application: " + e.message;
    btn.disabled = false;
    btn.textContent = "Submit Application";
  }
}
