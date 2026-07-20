import axios from "axios";

const api = axios.create({
    baseURL: "http://localhost:3000",
    withCredentials: true,
});

/**
 * Generate Interview Report
 */
export const generateInterviewReport = async ({
    jobDescription,
    selfDescription,
    resumeFile,
}) => {

    console.log("========== GENERATE REPORT ==========");
    console.log("Job Description:", jobDescription);
    console.log("Self Description:", selfDescription);
    console.log("Resume File:", resumeFile);

    const formData = new FormData();

    formData.append("jobDescription", jobDescription);
    formData.append("selfDescription", selfDescription);

    // Only append resume if user selected one
    if (resumeFile) {
        formData.append("resume", resumeFile);
    }

    try {

        console.log("Sending POST request to:");
        console.log("http://localhost:3000/api/interview/");

        const response = await api.post(
            "/api/interview/",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        );

        console.log("SUCCESS RESPONSE:");
        console.log(response);

        return response.data;

    } catch (error) {

        console.error("========== AXIOS ERROR ==========");

        if (error.response) {
            console.error("Status:", error.response.status);
            console.error("Response:", error.response.data);
        } else if (error.request) {
            console.error("No response received from server.");
            console.error(error.request);
        } else {
            console.error("Unexpected Error:", error.message);
        }

        console.error(error);

        throw error;
    }
};


/**
 * Get Interview Report By ID
 */
export const getInterviewReportById = async (interviewId) => {

    try {

        const response = await api.get(
            `/api/interview/report/${interviewId}`
        );

        return response.data;

    } catch (error) {

        console.error("Get Report Error:", error);

        throw error;
    }

};


/**
 * Get All Interview Reports
 */
export const getAllInterviewReports = async () => {

    try {

        const response = await api.get("/api/interview/");

        return response.data;

    } catch (error) {

        console.error("Get Reports Error:", error);

        throw error;
    }

};


/**
 * Generate Resume PDF
 */
export const generateResumePdf = async ({ interviewReportId }) => {

    try {

        const response = await api.post(
            `/api/interview/resume/pdf/${interviewReportId}`,
            null,
            {
                responseType: "blob",
            }
        );

        return response.data;

    } catch (error) {

        console.error("Resume PDF Error:", error);

        throw error;
    }

};