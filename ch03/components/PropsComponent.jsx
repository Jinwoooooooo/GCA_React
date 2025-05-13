import React from "react";

export default function PropsComponent(props) {
    return (
        <div className="PropsComponent">
            <h4>PropsComponent</h4>
            <p>
                title : {props.title}
                <br />
                message : {props.message}
                <br />
            </p>
        </div>
    );
}
