var heap = []

function insert(last)
{
    heap.push(last);
    
    let child = heap.length - 1;
    
    while ( child !== 0 )
    {
        let parent = Math.floor((child - 1)/2);

        if ( heap[child] > heap[parent] )
        {
            swap(child, parent);
            child = parent;
            continue;
        }

        break;
    }
    
    return heap;
}

function swap(child, parent)
{
    let temp = heap[child];
    
    heap[child] = heap[parent]
    heap[parent] = temp

    return heap;
}

function extractMax()
{
    if ( heap.length === 0 )
        return null;

    swap(0, heap.length - 1)
    
    let max = heap.pop();
    
    let parent = 0;
    let child  = 0;
    
    while ( 2*(parent) + 1 < heap.length )
    {
        child = 2 * (parent) + 1; // * For Left
        //* Or 2*(parent) + 2 => for Right
        
        let currentMax = Math.max(heap[parent], heap[child], typeof(heap[child + 1]) !== "undefined" ? heap[child + 1] : Number.MIN_SAFE_INTEGER)
        
        if ( currentMax === heap[parent] )
            break;
        
        if ( currentMax === heap[child] )
        {
            swap(parent, child)
            parent = child;
            continue;
        }
        
        if ( currentMax === heap[child+1] )
        {
            swap(parent, child+1);
            parent = child + 1;
            continue;
        }
    }

    return max;
}