var heap = []

function insert(toBeInserted)
{
    heap.push(toBeInserted)

    let child = heap.length - 1;

    while ( child !== 0 )
    {
        let parent = Math.floor((child - 1)/2);

        if ( heap[child] < heap[parent] )
        {
            swap(child, parent)
            child = parent
            continue;
        }

        break;
    }

    return;
}

function swap(child, parent)
{
    let temp = heap[child]
    heap[child] = heap[parent]
    heap[parent] = temp

    return;
}

function extractMin()
{
    if ( heap.length === 0 )
        return null;
    
    swap(0, heap.length - 1)

    let min = heap.pop();

    let parent = 0;

    while ( 2*(parent) + 1 < heap.length )
    {
        let child = 2 * parent + 1;

        let currentMin = Math.min(heap[parent], heap[child], typeof(heap[child + 1]) === 'undefined' ? Number.MAX_SAFE_INTEGER : heap[child + 1]);

        if ( currentMin === heap[parent] )
            break;

        if ( currentMin === heap[child] )
        {
            swap(parent, child)
            parent = child;
            continue
        }

        if ( currentMin === heap[child + 1])
        {
            swap(parent, child + 1)
            parent = child + 1;
            continue;
        }

        break;
    }

    return min;
}