import { useState } from "react";

const buildInitialProfile = (currentUser) => ({
	studentId: currentUser?.studentId || "ST-1002",
	fullName: currentUser?.name || "Pesandi Munasinghe",
	grade: "Grade 11",
	email: currentUser?.email || "pesandi@school.com",
	contact: "+94 71 101 0002",
	parentName: "Mr. V N Munasinghe",
	parentContact: "+94 71 120 4500",
	dateOfBirth: "2009-07-16",
	address: "No 14, Lake Road, Colombo",
	notes: "Focused learner. Needs support in practical coding sessions.",
});

function StudentDetails({ currentUser }) {
	const [profile, setProfile] = useState(() => buildInitialProfile(currentUser));
	const [profileImage, setProfileImage] = useState("");
	const [saveState, setSaveState] = useState({ status: "idle", message: "" });

	const handleProfileChange = (field, value) => {
		setProfile((previous) => ({ ...previous, [field]: value }));
		if (saveState.status !== "idle") {
			setSaveState({ status: "idle", message: "" });
		}
	};

	const handleSaveProfile = (event) => {
		event.preventDefault();

		if (!profile.fullName.trim() || !profile.email.trim() || !profile.contact.trim()) {
			setSaveState({
				status: "error",
				message: "Full name, email, and contact are required to save the profile.",
			});
			return;
		}

		setSaveState({
			status: "success",
			message: `Profile updated and saved at ${new Date().toLocaleTimeString()}.`,
		});
	};

	const handleProfileImageChange = (event) => {
		const selectedFile = event.target.files?.[0];

		if (!selectedFile) {
			return;
		}

		if (!selectedFile.type.startsWith("image/")) {
			setSaveState({
				status: "error",
				message: "Please upload a valid image file for the profile picture.",
			});
			event.target.value = "";
			return;
		}

		const reader = new FileReader();
		reader.onload = () => {
			setProfileImage(String(reader.result || ""));
			setSaveState({ status: "idle", message: "" });
		};
		reader.readAsDataURL(selectedFile);
	};

	const handleRemoveProfileImage = () => {
		setProfileImage("");
		setSaveState({ status: "idle", message: "" });
	};

	const handleResetProfile = () => {
		setProfile(buildInitialProfile(currentUser));
		setProfileImage("");
		setSaveState({ status: "idle", message: "" });
	};

	return (
		<section className="feature-section">
			<h2 className="section-title">My Profile</h2>
			<p className="section-subtitle">Manage your personal profile information and picture from one place.</p>

			<div className="student-profile-layout">
				<article className="student-profile-card">
					<div className="panel-head">
						<h3>Student Profile</h3>
						<span className="panel-meta">Editable</span>
					</div>

					<form className="profile-form-grid" onSubmit={handleSaveProfile}>
						<div className="profile-photo-row profile-wide">
							<div className="profile-photo-preview">
								{profileImage ? (
									<img src={profileImage} alt="Student profile" className="profile-photo-image" />
								) : (
									<span>{profile.fullName.slice(0, 1)}</span>
								)}
							</div>
							<div className="profile-photo-controls">
								<label htmlFor="profile-photo" className="btn-muted profile-photo-label">Upload Photo</label>
								<input
									id="profile-photo"
									type="file"
									accept="image/*"
									onChange={handleProfileImageChange}
									className="profile-photo-input"
								/>
								<button type="button" className="btn-muted" onClick={handleRemoveProfileImage}>Remove</button>
							</div>
						</div>

						<input
							type="text"
							className="feature-input profile-field"
							placeholder="Student ID"
							value={profile.studentId}
							onChange={(event) => handleProfileChange("studentId", event.target.value)}
						/>
						<input
							type="text"
							className="feature-input profile-field"
							placeholder="Full Name"
							value={profile.fullName}
							onChange={(event) => handleProfileChange("fullName", event.target.value)}
						/>
						<input
							type="text"
							className="feature-input profile-field"
							placeholder="Grade"
							value={profile.grade}
							onChange={(event) => handleProfileChange("grade", event.target.value)}
						/>
						<input
							type="email"
							className="feature-input profile-field"
							placeholder="Email"
							value={profile.email}
							onChange={(event) => handleProfileChange("email", event.target.value)}
						/>
						<input
							type="text"
							className="feature-input profile-field"
							placeholder="Contact Number"
							value={profile.contact}
							onChange={(event) => handleProfileChange("contact", event.target.value)}
						/>
						<input
							type="date"
							className="feature-input profile-field"
							value={profile.dateOfBirth}
							onChange={(event) => handleProfileChange("dateOfBirth", event.target.value)}
						/>
						<input
							type="text"
							className="feature-input profile-field"
							placeholder="Parent/Guardian Name"
							value={profile.parentName}
							onChange={(event) => handleProfileChange("parentName", event.target.value)}
						/>
						<input
							type="text"
							className="feature-input profile-field"
							placeholder="Parent Contact"
							value={profile.parentContact}
							onChange={(event) => handleProfileChange("parentContact", event.target.value)}
						/>
						<input
							type="text"
							className="feature-input profile-field profile-wide"
							placeholder="Address"
							value={profile.address}
							onChange={(event) => handleProfileChange("address", event.target.value)}
						/>
						<textarea
							className="feature-textarea profile-wide"
							placeholder="Additional Notes"
							value={profile.notes}
							onChange={(event) => handleProfileChange("notes", event.target.value)}
						/>

						<div className="profile-save-row">
							<button type="submit" className="btn-primary">Save Profile</button>
							<button type="button" className="btn-muted" onClick={handleResetProfile}>Reset</button>
						</div>
					</form>

					{saveState.status !== "idle" && (
						<p className={`profile-save-message ${saveState.status}`}>
							{saveState.message}
						</p>
					)}
				</article>

				<article className="student-profile-summary">
					<div className="profile-avatar">
						{profileImage ? (
							<img src={profileImage} alt="Student profile" className="profile-avatar-image" />
						) : (
							profile.fullName.slice(0, 1)
						)}
					</div>
					<h3>{profile.fullName}</h3>
					<p>{profile.grade}</p>
					<div className="profile-info-list">
						<div><span>Email</span><strong>{profile.email}</strong></div>
						<div><span>Contact</span><strong>{profile.contact}</strong></div>
						<div><span>Parent</span><strong>{profile.parentName}</strong></div>
						<div><span>Parent Contact</span><strong>{profile.parentContact}</strong></div>
					</div>
				</article>
			</div>
		</section>
	);
}

export default StudentDetails;
