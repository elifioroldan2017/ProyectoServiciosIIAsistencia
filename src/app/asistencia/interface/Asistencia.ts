export default interface Asistencia{
    scheduleId:number,
    title:string,
    userId:number,
    missing:number[] | null;
}