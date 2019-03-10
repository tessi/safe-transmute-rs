var N = null;var searchIndex = {};
searchIndex["safe_transmute"]={"doc":"This crate contains checked implementations of…","items":[[5,"transmute_many_permissive","safe_transmute","Transmute a byte slice into a sequence of values of the…",N,N],[5,"transmute_many_pedantic","","Transmute a byte slice into a sequence of values of the…",N,N],[5,"transmute_one_pedantic","","Transmute a byte slice into a single instance of a…",N,N],[5,"transmute_many","","Transmute a byte slice into a sequence of values of the…",N,N],[5,"transmute_one","","Transmute a byte slice into a single instance of a…",N,N],[5,"transmute_vec_permissive","","Transform a byte vector into a vector of values.",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[5,"transmute_vec_pedantic","","Transform a byte vector into a vector of values.",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[5,"transmute_vec","","Transform a byte vector into a vector of values.",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[0,"align","","Alignment checking primitives.",N,N],[5,"check_alignment","safe_transmute::align","Check whether the given data slice of `T`s is properly…",N,N],[0,"base","safe_transmute","Primitives for object and array transmutation.",N,N],[5,"from_bytes","safe_transmute::base","Convert a byte slice into a single instance of a…",N,N],[5,"from_bytes_pedantic","","Convert a byte slice into a single instance of a…",N,N],[5,"transmute_many","","View a byte slice as a slice of an arbitrary type.",N,N],[5,"transmute_many_permissive","","View a byte slice as a slice of an arbitrary type.",N,N],[5,"transmute_vec","","Transform a byte vector into a vector of an arbitrary type.",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[5,"transmute_vec_permissive","","Transform a byte vector into a vector of an arbitrary type.",N,[[["vec",["u8"]]],["vec"]]],[0,"bool","safe_transmute","Functions for safe transmutation to `bool`.",N,N],[5,"bytes_are_bool","safe_transmute::bool","Makes sure that the bytes represent a sequence of valid…",N,N],[5,"transmute_bool_permissive","","View a byte slice as a slice of boolean values.",N,N],[5,"transmute_bool_pedantic","","View a byte slice as a slice of boolean values.",N,N],[5,"transmute_bool_vec_permissive","","Trasform a byte vector into a vector of bool.",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[5,"transmute_bool_vec_pedantic","","Transform a byte vector into a vector of bool.",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[0,"error","safe_transmute","Detectable and recoverable-from transmutation precondition…",N,N],[3,"GuardError","safe_transmute::error","A slice boundary guard error, usually created by a `Guard`.",N,N],[12,"required","","The required amount of bytes for transmutation.",0,N],[12,"actual","","The actual amount of bytes.",0,N],[12,"reason","","Why this `required`/`actual`/`T` combo is an error.",0,N],[3,"UnalignedError","","Unaligned memory access error.",N,N],[12,"offset","","The required amount of bytes to discard at the front for…",1,N],[3,"UnalignedVecError","","Unaligned vector transmutation error.",N,N],[12,"offset","","The required amount of bytes to discard at the front for…",2,N],[12,"vec","","The original vector.",2,N],[4,"Error","","A transmutation error. This type describes possible errors…",N,N],[13,"Guard","","The data does not respect the target type's boundaries.",3,N],[13,"Unaligned","","The given data slice is not properly aligned for the…",3,N],[13,"UnalignedVec","","The given data vector is not properly aligned for the…",3,N],[13,"InvalidValue","","The data contains an invalid value for the target type.",3,N],[4,"ErrorReason","","How the type's size compares to the received byte count…",N,N],[13,"NotEnoughBytes","","Too few bytes to fill even one instance of a type.",4,N],[13,"TooManyBytes","","Too many bytes to fill a type.",4,N],[13,"InexactByteCount","","The byte amount received is not the same as the type's size.",4,N],[11,"description","","Retrieve a human readable description of the reason.",4,[[["self"]],["str"]]],[11,"with_vec","","Add a vector of bytes to make this an error of type…",1,[[["self"],["vec",["u8"]]],["unalignedvecerror"]]],[11,"copy_unchecked","","Create a copy of the data and transmute it. As the new…",2,[[["self"]],["vec"]]],[11,"copy","","Create a copy of the data and transmute it. As `T` is…",2,[[["self"]],["vec"]]],[0,"guard","safe_transmute","The `guard` module exposes an API for memory boundary…",N,N],[3,"SingleValueGuard","safe_transmute::guard","Single value guard: The byte slice must have exactly…",N,N],[3,"PedanticGuard","","Pedantic guard: The byte slice must have at least enough…",N,N],[3,"AllOrNothingGuard","","An all-or-nothing guard: The byte slice should not have…",N,N],[3,"SingleManyGuard","","A single-or-many guard: The byte slice must have at least…",N,N],[3,"PermissiveGuard","","Permissive guard: The resulting slice would have as many…",N,N],[8,"Guard","","The trait describes types which define boundary checking…",N,N],[10,"check","","Check the size of the given byte slice against a…",5,N],[0,"trivial","safe_transmute","Transmutation of trivial objects",N,N],[5,"transmute_trivial","safe_transmute::trivial","Transmute a byte slice into a single instance of a…",N,N],[5,"transmute_trivial_pedantic","","Transmute a byte slice into a single instance of a…",N,N],[5,"transmute_trivial_many","","Transmute a byte slice into a single instance of a…",N,N],[5,"guarded_transmute_pod_many_permissive","","View a byte slice as a slice of a trivially transmutable…",N,N],[5,"guarded_transmute_pod_many_pedantic","","View a byte slice as a slice of a trivially transmutable…",N,N],[5,"transmute_trivial_vec","","Transform a byte vector into a vector of trivially…",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[5,"guarded_transmute_pod_vec_permissive","","Transform a byte vector into a vector of trivially…",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[5,"guarded_transmute_pod_vec_pedantic","","Transform a byte vector into a vector of trivially…",N,[[["vec",["u8"]]],["result",["vec","error"]]]],[8,"TriviallyTransmutable","","Type that can be constructed from any combination of bytes.",N,N],[0,"util","safe_transmute","Module containing various utility functions.",N,N],[5,"designalise_f32","safe_transmute::util","If the specified 32-bit float is a signaling NaN, make it…",N,[[["f32"]],["f32"]]],[5,"designalise_f64","","If the specified 64-bit float is a signaling NaN, make it…",N,[[["f64"]],["f64"]]],[5,"from_bits_f32_designalised","","Reinterpret the given bits as a 32-bit float. If the…",N,[[["u32"]],["f32"]]],[5,"from_bits_f64_designalised","","Reinterpret the given bits as a 64-bit float. If the…",N,[[["u64"]],["f64"]]],[0,"to_bytes","safe_transmute","Functions for transmutation from a concrete type to bytes.",N,N],[5,"transmute_to_bytes_unchecked","safe_transmute::to_bytes","Transmute a single instance of an arbitrary type into a…",N,N],[5,"transmute_to_bytes_many_unchecked","","Transmute a slice of arbitrary types into a slice of their…",N,N],[5,"transmute_one_to_bytes","","Transmute a single instance of a trivially transmutable…",N,N],[5,"transmute_to_bytes","","Transmute a slice of arbitrary types into a slice of their…",N,N],[5,"guarded_transmute_to_bytes_pod_many","","Transmute a slice of arbitrary types into a slice of their…",N,N],[5,"transmute_to_bytes_vec","","Transmute a vector of elements of an arbitrary type into a…",N,[[["vec"]],["vec",["u8"]]]],[5,"guarded_transmute_to_bytes_pod_vec","","Transmute a vector of trivially transmutable values into a…",N,[[["vec"]],["vec",["u8"]]]],[11,"to_string","safe_transmute::error","",0,[[["self"]],["string"]]],[11,"from","","",0,[[["t"]],["t"]]],[11,"into","","",0,[[["self"]],["u"]]],[11,"to_owned","","",0,[[["self"]],["t"]]],[11,"clone_into","","",0,N],[11,"try_from","","",0,[[["u"]],["result"]]],[11,"borrow","","",0,[[["self"]],["t"]]],[11,"borrow_mut","","",0,[[["self"]],["t"]]],[11,"try_into","","",0,[[["self"]],["result"]]],[11,"get_type_id","","",0,[[["self"]],["typeid"]]],[11,"to_string","","",1,[[["self"]],["string"]]],[11,"from","","",1,[[["t"]],["t"]]],[11,"into","","",1,[[["self"]],["u"]]],[11,"to_owned","","",1,[[["self"]],["t"]]],[11,"clone_into","","",1,N],[11,"try_from","","",1,[[["u"]],["result"]]],[11,"borrow","","",1,[[["self"]],["t"]]],[11,"borrow_mut","","",1,[[["self"]],["t"]]],[11,"try_into","","",1,[[["self"]],["result"]]],[11,"get_type_id","","",1,[[["self"]],["typeid"]]],[11,"to_string","","",2,[[["self"]],["string"]]],[11,"from","","",2,[[["t"]],["t"]]],[11,"into","","",2,[[["self"]],["u"]]],[11,"to_owned","","",2,[[["self"]],["t"]]],[11,"clone_into","","",2,N],[11,"try_from","","",2,[[["u"]],["result"]]],[11,"borrow","","",2,[[["self"]],["t"]]],[11,"borrow_mut","","",2,[[["self"]],["t"]]],[11,"try_into","","",2,[[["self"]],["result"]]],[11,"get_type_id","","",2,[[["self"]],["typeid"]]],[11,"to_string","","",3,[[["self"]],["string"]]],[11,"from","","",3,[[["t"]],["t"]]],[11,"into","","",3,[[["self"]],["u"]]],[11,"to_owned","","",3,[[["self"]],["t"]]],[11,"clone_into","","",3,N],[11,"try_from","","",3,[[["u"]],["result"]]],[11,"borrow","","",3,[[["self"]],["t"]]],[11,"borrow_mut","","",3,[[["self"]],["t"]]],[11,"try_into","","",3,[[["self"]],["result"]]],[11,"get_type_id","","",3,[[["self"]],["typeid"]]],[11,"from","","",4,[[["t"]],["t"]]],[11,"into","","",4,[[["self"]],["u"]]],[11,"to_owned","","",4,[[["self"]],["t"]]],[11,"clone_into","","",4,N],[11,"try_from","","",4,[[["u"]],["result"]]],[11,"borrow","","",4,[[["self"]],["t"]]],[11,"borrow_mut","","",4,[[["self"]],["t"]]],[11,"try_into","","",4,[[["self"]],["result"]]],[11,"get_type_id","","",4,[[["self"]],["typeid"]]],[11,"from","safe_transmute::guard","",6,[[["t"]],["t"]]],[11,"into","","",6,[[["self"]],["u"]]],[11,"try_from","","",6,[[["u"]],["result"]]],[11,"borrow","","",6,[[["self"]],["t"]]],[11,"borrow_mut","","",6,[[["self"]],["t"]]],[11,"try_into","","",6,[[["self"]],["result"]]],[11,"get_type_id","","",6,[[["self"]],["typeid"]]],[11,"from","","",7,[[["t"]],["t"]]],[11,"into","","",7,[[["self"]],["u"]]],[11,"try_from","","",7,[[["u"]],["result"]]],[11,"borrow","","",7,[[["self"]],["t"]]],[11,"borrow_mut","","",7,[[["self"]],["t"]]],[11,"try_into","","",7,[[["self"]],["result"]]],[11,"get_type_id","","",7,[[["self"]],["typeid"]]],[11,"from","","",8,[[["t"]],["t"]]],[11,"into","","",8,[[["self"]],["u"]]],[11,"try_from","","",8,[[["u"]],["result"]]],[11,"borrow","","",8,[[["self"]],["t"]]],[11,"borrow_mut","","",8,[[["self"]],["t"]]],[11,"try_into","","",8,[[["self"]],["result"]]],[11,"get_type_id","","",8,[[["self"]],["typeid"]]],[11,"from","","",9,[[["t"]],["t"]]],[11,"into","","",9,[[["self"]],["u"]]],[11,"try_from","","",9,[[["u"]],["result"]]],[11,"borrow","","",9,[[["self"]],["t"]]],[11,"borrow_mut","","",9,[[["self"]],["t"]]],[11,"try_into","","",9,[[["self"]],["result"]]],[11,"get_type_id","","",9,[[["self"]],["typeid"]]],[11,"from","","",10,[[["t"]],["t"]]],[11,"into","","",10,[[["self"]],["u"]]],[11,"try_from","","",10,[[["u"]],["result"]]],[11,"borrow","","",10,[[["self"]],["t"]]],[11,"borrow_mut","","",10,[[["self"]],["t"]]],[11,"try_into","","",10,[[["self"]],["result"]]],[11,"get_type_id","","",10,[[["self"]],["typeid"]]],[11,"check","","",6,N],[11,"check","","",7,N],[11,"check","","",8,N],[11,"check","","",9,N],[11,"check","","",10,N],[11,"eq","safe_transmute::error","",3,[[["self"],["error"]],["bool"]]],[11,"ne","","",3,[[["self"],["error"]],["bool"]]],[11,"eq","","",0,[[["self"],["guarderror"]],["bool"]]],[11,"ne","","",0,[[["self"],["guarderror"]],["bool"]]],[11,"eq","","",4,[[["self"],["errorreason"]],["bool"]]],[11,"eq","","",1,[[["self"],["unalignederror"]],["bool"]]],[11,"ne","","",1,[[["self"],["unalignederror"]],["bool"]]],[11,"eq","","",2,[[["self"],["unalignedvecerror"]],["bool"]]],[11,"ne","","",2,[[["self"],["unalignedvecerror"]],["bool"]]],[11,"clone","","",3,[[["self"]],["error"]]],[11,"clone","","",0,[[["self"]],["guarderror"]]],[11,"clone","","",4,[[["self"]],["errorreason"]]],[11,"clone","","",1,[[["self"]],["unalignederror"]]],[11,"clone","","",2,[[["self"]],["unalignedvecerror"]]],[11,"from","","",3,[[["guarderror"]],["error"]]],[11,"from","","",3,[[["unalignederror"]],["error"]]],[11,"from","","",3,[[["unalignedvecerror"]],["error"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",4,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",3,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",0,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",1,[[["self"],["formatter"]],["result"]]],[11,"fmt","","",2,[[["self"],["formatter"]],["result"]]],[11,"hash","","",3,N],[11,"hash","","",0,N],[11,"hash","","",4,N],[11,"hash","","",1,N],[11,"hash","","",2,N],[11,"description","","",3,[[["self"]],["str"]]],[11,"description","","",0,[[["self"]],["str"]]],[11,"description","","",1,[[["self"]],["str"]]],[11,"description","","",2,[[["self"]],["str"]]]],"paths":[[3,"GuardError"],[3,"UnalignedError"],[3,"UnalignedVecError"],[4,"Error"],[4,"ErrorReason"],[8,"Guard"],[3,"SingleValueGuard"],[3,"PedanticGuard"],[3,"AllOrNothingGuard"],[3,"SingleManyGuard"],[3,"PermissiveGuard"]]};
initSearch(searchIndex);addSearchOptions(searchIndex);
