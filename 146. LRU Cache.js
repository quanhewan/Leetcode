146. LRU Cache
/**
 * @constructor
 */
var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.len = 0;
    this.map = {};
    this.head = new LinkedHash(-1, -1);
    this.tail = new LinkedHash(-1, -1);
    this.head.next = this.tail;
    this.tail.prev = this.head;
};

function LinkedHash(key, val){
	this.key = key;
	this.val = val;
	this.prev = null;
	this.next = null;
}


LRUCache.prototype.moveToTail = function(node){
    if(node.prev){
		node.prev.next = node.next;
	}
	if(node.next){
	    node.next.prev = node.prev;
	}
	node.prev = this.tail.prev;
	this.tail.prev = node;
	node.prev.next = node;
	node.next = this.tail;
};

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function(key) {
	if(!this.map[key]){
		return -1;
	} else {
		this.moveToTail(this.map[key]);
		return this.map[key].val;
	}
};

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function(key, value) {
	if(this.map[key]){
		this.moveToTail(this.map[key]);
		this.map[key].val = value;
		return;
	} else {
		var toSet = new LinkedHash(key, value);
		this.map[key] = toSet;
		this.moveToTail(toSet);
		this.len++;
		if(this.len > this.capacity){
			var toDelete = this.head.next;
			this.head.next = this.head.next.next;
			this.head.next.prev = this.head;
			delete this.map[toDelete.key];
			this.len--;
		}
	}
};