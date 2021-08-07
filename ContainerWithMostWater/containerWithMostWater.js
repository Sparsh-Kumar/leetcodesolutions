

const containerWithMostWater = (coords = []) => {
    if (!coords.length) {
        return 0;
    }

    let start = 0;
    let end = coords.length - 1;
    let area = -1;

    while (start <= end) {
        
        let width = end - start;
        let height = coords [start] < coords [end] ? coords [start]: coords [end];
        area = Math.max (area, width * height);
        if (coords [start] <= coords [end]) {
            start++;
        } else {
            end--;
        }

    }

    return area;
}

const main = () => {
    console.log (containerWithMostWater ([4,3,2,1,4]));
}

main ();