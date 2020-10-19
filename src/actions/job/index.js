export const TOTAL_JOB = 'TOTAL_JOB';
export const GET_ID = 'GET_ID';

export const getTotalJob = (totalJob) => ({
    type: TOTAL_JOB,
    totalJob,
});
export const getId = (idJob) => ({
    type: GET_ID,
    idJob,
});