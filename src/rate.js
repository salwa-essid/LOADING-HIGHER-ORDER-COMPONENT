import React from 'react';

const Rate = ({ nbrofrate }) => {

    const response = nbrofrate === 0 ? (
        <div style={{ textAlign: 'right' }}>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
            <i className="far fa-star"></i>
        </div>
    ) : (
            nbrofrate === 1 ? (
                <div style={{ textAlign: 'right' }}>
                    <i className="fas fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                    <i className="far fa-star"></i>
                </div>
            ) : (
                    nbrofrate === 2 ? (
                        <div style={{ textAlign: 'right' }}>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                            <i className="far fa-star"></i>
                        </div>
                    ) : (
                            nbrofrate === 3 ? (
                                <div style={{ textAlign: 'right' }}>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="fas fa-star"></i>
                                    <i className="far fa-star"></i>
                                    <i className="far fa-star"></i>
                                </div>
                            ) : (
                                    nbrofrate === 4 ? (
                                        <div style={{ textAlign: 'right' }}>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="fas fa-star"></i>
                                            <i className="far fa-star"></i>
                                        </div>
                                    ) : (
                                            nbrofrate === 5 && (
                                                <div style={{ textAlign: 'right' }}>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                    <i className="fas fa-star"></i>
                                                </div>
                                            )
                                        )
                                )
                        )
                )
        )
    return response
}
export default Rate;