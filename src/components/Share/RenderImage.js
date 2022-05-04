import React, { Component } from 'react';
import { Upload, message } from 'antd';
import {
    PictureFilled
} from '@ant-design/icons';

const { Dragger } = Upload;

class renderImageDragAnt extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isInitValue: false,
            model: {
                src: props.input.value ? (this.props.fullpath ? props.input.value : '/storage/images/' + props.input.value) : 'https://via.placeholder.com/120x150?text=%2Badd'
            }
        };
    }

    handleModelChange = (value) => {
        let model = Object.assign({}, value)
        if (!model.src) {
            // model.src = 'https://via.placeholder.com/120x150?text=%2Badd'
            // this.setState({ model: model, isInitValue: true });
            this.props.input.onChange('');
        } else {
            // this.setState({ model: model, isInitValue: true });
            if (this.props.fullpath) {
                this.props.input.onChange(model.src);
            } else {
                this.props.input.onChange(model['data-name']);
            }

        }

    }
    render() {
        const { width, height, meta: { error }, hideResize } = this.props;
        // let imgSize = display;
        // if(!display){
        //     imgSize = width && width > 100 ? { width: 100, height: (100 * height / width)} : { width: 100, height: 100}
        // }
        const props = {
            style: { height: 215 },
            name: 'file',
            multiple: true,
            action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
            onChange(info) {
                const { status } = info.file;
                if (status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (status === 'done') {
                    message.success(`${ info.file.name } file uploaded successfully.`);
                } else if (status === 'error') {
                    message.error(`${ info.file.name } file upload failed.`);
                }
            },
        };
        return (
            <div className="w-100">
                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <PictureFilled style={{ fontSize: 80, color: '#ccc' }} />
                    </p>
                    <button className="btn btn-secondary mb-2">Add Image</button>
                    <p className="ant-upload-hint">
                        or drop images to upload
                    </p>
                </Dragger>
                {error && <span className="invalid-feedback d-block">{error}</span>}
                {width && height && !hideResize && <span className="d-block mb-2">{`Hình ảnh sẽ được resize về kích thước ${width} x ${height}`}</span>}
            </div>
        );
    }
};

export default renderImageDragAnt