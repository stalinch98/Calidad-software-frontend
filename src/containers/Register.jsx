
import React from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import '../assets/styles/componenets/Register.css'


const Register = () => {
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        navigate('/')
    }

    return (
        <section className="register">
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>Nombre</label>
                <input
                    {...register("nombre", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
                />
                {errors?.nombre?.type === "required" && <p>Este campo es requerido</p>}
                {errors?.nombre?.type === "pattern" && (
                    <p>Solo se permiten caracteres alphabeticos</p>
                )}
                <label>Apellido</label>
                <input
                    {...register("apellido", { required: true, pattern: /^[A-Za-z]+$/i })}
                />
                {errors?.apellido?.type === "required" && <p>Este campo es requerido</p>}
                {errors?.apellido?.type === "pattern" && (
                    <p>Solo se permiten caracteres alphabeticos</p>
                )}
                <label>Edad</label>a
                <input {...register("edad", { required: true, min: 18, pattern: /^[0-9]/ })} />
                {errors?.edad?.type === "required" && <p>Este campo es requerido</p>}
                {errors.edad && (<p>Debes ser mayor de edad</p>)}
                {errors?.edad?.type === "pattern" && (
                    <p>Solo se permiten numeros</p>
                )}
                <label>Cedula</label>
                <input {...register("cedula", {
                    required: true,
                    minLength: {
                        value: 10,
                        message: "Solo se permiten numeros y la cedula de identidad debe tener 10 caracteres"
                    },
                    pattern: /^[0-9]/
                })} />
                {errors?.cedula?.type === "required" && <p>Este campo es requerido</p>}
                {errors.cedula?.message && <p>{errors.cedula?.message}</p>}
                <label>Email</label>
                <input {...register("email", {
                    required: true,
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Email invalido"
                    }
                })} />
                {errors?.email?.type === "required" && <p>Este campo es requerido</p>}
                {errors.email?.message && <p>{errors.email?.message}</p>}

                <label>Contraseña</label>
                <input {...register("contrasena", {
                    required: true, minLength: {
                        value: 6,
                        message: "La contraseña debe tener almenos 6 caracteres"
                    },
                })} />
                {errors?.contrasena?.type === "required" && <p>Este campo es requerido</p>}
                {errors.contrasena?.message && <p>{errors.contrasena?.message}</p>}

                <label>Confirmar Contraseña</label>
                <input {...register("contrasenaConfirm", {
                    required: true, minLength: {
                        value: 6,
                        message: "La contraseña debe tener almenos 6 caracteres"
                    },
                })} />
                {errors?.contrasenaConfirm?.type === "required" && <p>Este campo es requerido</p>}
                {errors.contrasenaConfirm?.message && <p>{errors.contrasenaConfirm?.message}</p>}

                <label>Ciudad de Nacimiento</label>
                <input
                    {...register("ciudad", {
                        required: true,
                        maxLength: 20,
                        pattern: /^[A-Za-z]+$/i
                    })}
                />
                {errors?.ciudad?.type === "required" && <p>Este campo es requerido</p>}
                {errors?.ciudad?.type === "pattern" && (
                    <p>Solo se permiten caracteres alphabeticos</p>
                )}
                <label>Fecha de Nacimiento</label>
                <input
                    {...register("fechaNacimiento", {
                        required: true,
                    })}
                    type="date"
                />
                {errors?.fechaNacimiento?.type === "required" && <p>Este campo es requerido</p>}

                <label>Genero</label>
                <label>
                    Hombre
                    <input
                        {...register("genero")}
                        type="radio"
                        name="genero"
                        value="hombre"
                    />
                </label>
                <label>
                    Mujer
                    <input
                        {...register("genero")}
                        type="radio"
                        name="genero"
                        value="mujer"
                    />
                </label>
                <label>
                    Prefiero no decir
                    <input
                        {...register("genero")}
                        type="radio"
                        name="genero"
                        value="no decir"
                    />
                </label>

                <label>Estado Civil</label>
                <label>
                    Soltero
                    <input
                        {...register("estadoCivil")}
                        type="radio"
                        name="estadoCivil"
                        value="Soltero"
                    />
                </label>
                <label>
                    Casado
                    <input
                        {...register("estadoCivil")}
                        type="radio"
                        name="estadoCivil"
                        value="Casado"
                    />
                </label>
                <label>
                    Divorciado
                    <input
                        {...register("estadoCivil")}
                        type="radio"
                        name="estadoCivil"
                        value="Divorciado"
                    />
                </label>
                <label>
                    Viudo
                    <input
                        {...register("estadoCivil")}
                        type="radio"
                        name="estadoCivil"
                        value="viudo"
                    />
                </label>
                <input type="submit" />
            </form>
        </section>
    )
}

export default Register;