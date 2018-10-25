var N = null;var searchIndex = {};
searchIndex["tsukuyomi_session"]={"doc":"Modifiers for supporting session management.","items":[[3,"Session","tsukuyomi_session","An interface of session values.",N,N],[3,"Storage","","A `Modifier` for managing session values.",N,N],[0,"backend","","The definition of session backends",N,N],[3,"CookieSessionBackend","tsukuyomi_session::backend","",N,N],[3,"RedisSessionBackend","","",N,N],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"plain","","",0,[[],["self"]]],[11,"signed","","",0,[[["key"]],["self"]]],[11,"private","","",0,[[["key"]],["self"]]],[11,"cookie_name","","",0,N],[11,"max_age","","",0,[[["self"],["duration"]],["self"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"new","","",1,[[["client"]],["self"]]],[11,"key_prefix","","",1,N],[11,"cookie_name","","",1,N],[11,"timeout","","",1,[[["self"],["duration"]],["self"]]],[8,"Backend","","A trait representing the session backend.",N,N],[11,"fmt","tsukuyomi_session","",2,[[["self"],["formatter"]],["result"]]],[11,"new","","Creates a `Storage` with the specified session backend.",2,[[["b"]],["self"]]],[11,"before_handle","","",2,[[["self"],["input"]],["beforehandle"]]],[11,"after_handle","","",2,[[["self"],["input"],["result",["output"]]],["afterhandle"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"get","","Retrieves a field from this session and parses it into the specified type.",3,[[["self"],["str"]],["result",["option"]]]],[11,"set","","Sets a field to this session with serializing the specified value into a string.",3,[[["self"],["str"],["t"]],["result"]]],[11,"remove","","Removes a field from this session.",3,[[["self"],["str"]]]],[11,"clear","","Marks this session cleared.",3,[[["self"]]]],[8,"InputSessionExt","","An extension trait which adding methods for accessing `Session`.",N,N],[10,"session","","",4,[[["self"]],["option",["session"]]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"from","tsukuyomi_session::backend","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]]],"paths":[[3,"CookieSessionBackend"],[3,"RedisSessionBackend"],[3,"Storage"],[3,"Session"],[8,"InputSessionExt"]]};
initSearch(searchIndex);
