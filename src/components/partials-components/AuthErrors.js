function AuthErrors(importedErrors) {
    return (
        <div className="error_message">
            {importedErrors.errors}
        </div>
    )
}

export default AuthErrors