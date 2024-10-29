import datatype from 'prop-types';

function SubComponent({str, num, boolean, obj, arr, func}) {
    return(
        <div>
            <p>string props : {str}</p>
            <p>num props : {num}</p>
            <p>boolean props : {boolean.toString()}</p>
            <p>obj props : {JSON.stringify(obj)}</p>
            <p>arr props : {arr.toString()}</p>
            <p>func props : {func}</p>
        </div>
    )
}

SubComponent.propTypes = {
    //갖고온 타입에 대한 명확한 명시가 필요할 때 씀 
    str:datatype.string,
    num:datatype.number,
    boolean:datatype.bool,
    obj:datatype.object,
    arr:datatype.array,
    func:datatype.func
}

export default SubComponent;