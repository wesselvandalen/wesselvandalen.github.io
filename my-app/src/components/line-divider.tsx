function LineDivider(props: any) {

    const style: any = {
        backgroundColor: props.dark ? 'rgba(255, 255, 255, .5)' : 'rgba(0, 0, 0, .1)', // Darker color if dark prop is true
        margin: '0 0 40px 0',
        width: '100%',
        height: '1px',
    };

    return (
        <div style={style}></div>
    );
}

export default LineDivider;