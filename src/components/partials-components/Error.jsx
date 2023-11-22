export default function Error(errors) {
    return (
        <div className="error_message">
            {errors.errors}
        </div>
    )
}
