import React, { Component } from "react";

const withLoading = (WrappedComponent) => {
    return class LoaderHoc extends Component {
        constructor(props) {
            super(props);
            this.state = {
                isloading: true,
            }
        }

        isLoading = () => {
            setTimeout(() => {
                this.setState({
                    isloading: false
                })
            }, 1000)
        }

        componentDidMount() {
            this.isLoading();
        }
        render() {
            return (
                this.state.isloading === true ? 
                <div className='d-flex justify-content-center my-5'>
                    <div className="spinner-border"></div>
                    </div> : <WrappedComponent {...props}/> )
        }
    }
}
export default withLoading; 