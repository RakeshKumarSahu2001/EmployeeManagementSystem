class ApiErrorHandler extends Error{
    statusCode;
    success;
    errors;
    message;
    constructor({statusCode,errors,message}){
        super(message)
        this.statusCode=statusCode || 500;
        this.success=false;
        this.errors=errors;
        this.message=message||"Something went wrong on the server.";
        Error.captureStackTrace(this,this.constructor)
    }

}

export default ApiErrorHandler;