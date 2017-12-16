var searchIndex = {};
searchIndex["safe_transmute"] = {"doc":"This crate contains checked implementations of `transmute()`.","items":[[3,"GuardError","safe_transmute","A transmutation error.",null,null],[12,"required","","The required amount of bytes for transmutation.",0,null],[12,"actual","","The actual amount of bytes.",0,null],[12,"reason","","Why this `required`/`actual`/`T` combo is an error.",0,null],[4,"ErrorReason","","How the type's size compares to the received byte count and the transmutation function's characteristic.",null,null],[13,"NotEnoughBytes","","Too few bytes to fill even one instance of a type.",1,null],[13,"TooManyBytes","","Too many bytes to fill a type.",1,null],[13,"InexactByteCount","","The byte amount received is not the same as the type's size.",1,null],[13,"InvalidValue","","The byte count is fine, but the data contains an invalid value for the target type.",1,null],[5,"guarded_transmute_pod","","Transmute a byte slice into a single instance of a POD.",null,null],[5,"guarded_transmute_pod_many","","Transmute a byte slice into a single instance of a POD.",null,null],[5,"guarded_transmute_pod_many_pedantic","","View a byte slice as a slice of POD.",null,null],[5,"guarded_transmute_pod_many_permissive","","View a byte slice as a slice of a POD type.",null,null],[5,"guarded_transmute_pod_pedantic","","Transmute a byte slice into a single instance of a POD.",null,null],[5,"guarded_transmute_pod_vec","","Trasform a byte vector into a vector of POD.",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"guarded_transmute_pod_vec_pedantic","","Trasform a byte vector into a vector of POD.",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"guarded_transmute_pod_vec_permissive","","Trasform a byte vector into a vector of POD.",null,{"inputs":[{"name":"vec"}],"output":{"name":"vec"}}],[5,"guarded_transmute_bool_pedantic","","View a byte slice as a slice of boolean values.",null,null],[5,"guarded_transmute_bool_permissive","","View a byte slice as a slice of boolean values.",null,null],[5,"guarded_transmute_bool_vec_pedantic","","Trasform a byte vector into a vector of bool.",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"guarded_transmute_bool_vec_permissive","","Trasform a byte vector into a vector of bool.",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"guarded_transmute","","Transmute a byte slice into a single instance of a `Copy`able type.",null,null],[5,"guarded_transmute_pedantic","","Transmute a byte slice into a single instance of a `Copy`able type.",null,null],[5,"guarded_transmute_many","","View a byte slice as a slice of an arbitrary type.",null,null],[5,"guarded_transmute_many_permissive","","View a byte slice as a slice of an arbitrary type.",null,null],[5,"guarded_transmute_many_pedantic","","View a byte slice as a slice of an arbitrary type.",null,null],[5,"guarded_transmute_vec","","Trasform a byte vector into a vector of an arbitrary type.",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[5,"guarded_transmute_vec_permissive","","Trasform a byte vector into a vector of an arbitrary type.",null,{"inputs":[{"name":"vec"}],"output":{"name":"vec"}}],[5,"guarded_transmute_vec_pedantic","","Trasform a byte vector into a vector of an arbitrary type.",null,{"inputs":[{"name":"vec"}],"output":{"name":"result"}}],[11,"clone","","",0,{"inputs":[{"name":"self"}],"output":{"name":"guarderror"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",0,{"inputs":[{"name":"self"},{"name":"guarderror"}],"output":{"name":"bool"}}],[11,"ne","","",0,{"inputs":[{"name":"self"},{"name":"guarderror"}],"output":{"name":"bool"}}],[11,"hash","","",0,null],[11,"clone","","",1,{"inputs":[{"name":"self"}],"output":{"name":"errorreason"}}],[11,"fmt","","",1,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"self"},{"name":"errorreason"}],"output":{"name":"bool"}}],[11,"hash","","",1,null],[11,"description","","",0,{"inputs":[{"name":"self"}],"output":{"name":"str"}}],[11,"fmt","","",0,{"inputs":[{"name":"self"},{"name":"formatter"}],"output":{"name":"result"}}],[0,"guard","","The `guard` module exposes an API for memory boundary checking.",null,null],[3,"SingleValueGuard","safe_transmute::guard","Single value guard: The byte slice must have exactly enough bytes to fill a single instance of a type.",null,null],[3,"PedanticGuard","","Pedantic guard: The byte slice must have at least enough bytes to fill a single instance of a type, and should not have extraneous data.",null,null],[3,"StrictGuard","","A strict guard: The byte slice should not have extraneous data, but can be empty.",null,null],[3,"BasicGuard","","A basic reasonable guard: The byte slice must have at least enough bytes to fill a single instance of a type, and extraneous data is ignored.",null,null],[3,"PermissiveGuard","","Permissive guard: The resulting slice would have as many instances of a type as will fit, rounded down. Therefore, this guard will never yield an error.",null,null],[8,"Guard","","The `Guard` type describes types which define boundary checking strategies.",null,null],[10,"check","","Check the size of the given byte slice against a particular type.",2,null],[11,"check","","",3,null],[11,"check","","",4,null],[11,"check","","",5,null],[11,"check","","",6,null],[11,"check","","",7,null],[0,"util","safe_transmute","Module containing various utility functions.",null,null],[5,"designalise_f32","safe_transmute::util","If the specified 32-bit float is a signaling NaN, make it a quiet NaN.",null,{"inputs":[{"name":"f32"}],"output":{"name":"f32"}}],[5,"designalise_f64","","If the specified 64-bit float is a signaling NaN, make it a quiet NaN.",null,{"inputs":[{"name":"f64"}],"output":{"name":"f64"}}],[6,"Error","safe_transmute","",null,null],[8,"PodTransmutable","","Type that can be non-`unsafe`ly transmuted into",null,null]],"paths":[[3,"GuardError"],[4,"ErrorReason"],[8,"Guard"],[3,"SingleValueGuard"],[3,"PedanticGuard"],[3,"StrictGuard"],[3,"BasicGuard"],[3,"PermissiveGuard"]]};
initSearch(searchIndex);
