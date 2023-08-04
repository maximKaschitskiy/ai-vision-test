import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addFiles } from "../redux/slices/files";
import { FilesType } from "../types";
import { RootState } from "../redux/store";
import { setInput, setDragged, setValidity } from "../redux/slices/ui";

import DropzoneWrapper from "../styles/Blocks/DropzoneWrapper"
import Text from "../styles/Blocks/Text"
import CloudIcon from "../styles/Blocks/CloudIcon"
import UploadButton from "../styles/Blocks/UploadButton"
import { theme } from "../styles/theme"

import IconFile from "../assets/cloud-upload-svgrepo-com.svg"

const Dropzone = () => {

    const ui = useSelector((state: RootState) => state.ui)
    const files = useSelector((state: RootState) => state.files)
    const dispatch = useDispatch()

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (files.length < 100 && event.target.files && event.target.files.length <= 100) {
            const fileList = Array.from(event.target.files)
            const formattedFiles = fileList.map((file): FilesType => ({ file, status: 'ready' }))
            dispatch(addFiles(formattedFiles))
            dispatch(setInput)
        } else {
            dispatch(setValidity(true))
        }
    }

    const handleDragNDrop = (event: React.DragEvent<HTMLDivElement>) => {
        if (files.length < 100 && event.dataTransfer.files && event.dataTransfer.files.length <= 100) {
            const fileList = Array.from(event.dataTransfer.files)
            const formattedFiles = fileList.map((file): FilesType => ({ file, status: 'ready' }))
            dispatch(addFiles(formattedFiles))
            dispatch(setInput)
        } else {
            dispatch(setValidity(true))
        }
    }

    return (
        <DropzoneWrapper
            validErr={ui.validity}
            dragged={ui.dragged}
            onDragLeave={(event)=>{
                event.preventDefault()
                dispatch(setDragged(false))
            }}
            onDragEnd={(event) => {
                event.preventDefault()
                dispatch(setDragged(false))
            }}
            onDrop={(event) => {
                event.preventDefault()
                handleDragNDrop(event)
                dispatch(setDragged(false))
            }}
            onDragOver={(event) => {
                event.preventDefault()
                dispatch(setValidity(false))
                dispatch(setDragged(true))
            }}
        >
            <Text color={theme.colors.textTint} style={{fontSize: '12px', alignSelf: 'flex-start', color: 'red', height: '12px'}}>{ui.validity ? `Max files validity` : ''}</Text>
            <CloudIcon src={IconFile}></CloudIcon>
            <Text color={theme.colors.textTint} style={theme.fonts.subtitle}>Drag and drop</Text>
            <Text color={theme.colors.textLight} style={theme.fonts.subtitle}>OR</Text>
            <UploadButton htmlFor="upload" style={{ fontWeight: '500' }}>Browse files</UploadButton>
            <input
                style={{ display: 'none' }}
                id="upload"
                type="file"
                onChange={handleFileChange}
                multiple={true}
                value={ui.input}
            />
        </DropzoneWrapper>
    )
}

export default Dropzone
