from fastapi import UploadFile, File, APIRouter, HTTPException, status
from fastapi.responses import JSONResponse
import shutil
from pathlib import Path

document_router = APIRouter(
    prefix="/documents",
    tags=["documents"],
    responses={404: {"description": "Not found"}}
)

UPLOAD_DIR = Path("uploads")
UPLOAD_DIR.mkdir(exist_ok=True)

MAX_FILE_SIZE = 15 * 1024 * 1024


@document_router.post("/uploads")
async def upload_file(file: UploadFile = File(...)):
    try:
        if not file:
            raise HTTPException(422, "No file provided")

        if file.content_type != "application/pdf":
            raise HTTPException(400, "Only PDF files are allowed")

        if file.size > MAX_FILE_SIZE:
            raise HTTPException(
                status.HTTP_413_REQUEST_ENTITY_TOO_LARGE,
                f"File too large. Maximum {MAX_FILE_SIZE // 1024 ** 2} MB"
            )

        file_path = UPLOAD_DIR / file.filename
        with file_path.open("wb") as buffer:
            shutil.copyfileobj(file.file, buffer)

        return {
            "filename": file.filename,
            "content_type": file.content_type,
            "size": file.size,
        }
    except Exception as e:
        return JSONResponse(
            status_code=500,
            content={"detail": f"Upload failed: {str(e)}"}
        )
    finally:
        await file.close()
