import { useContext, useState } from "react";
import { CarsContext } from "../../context/carsContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { CreateAnnouncementeComponentStyle } from "./style";

export interface requestAnnouncement {
  nome: string;
  marca: string;
  model: string;
  ano: number;
  valor: number;
  km: number;
  placa: string;
  cor: string;
  transmissao: "M" | "A";
  descricao: string;
  image: FileList[];
}

export const CreateAnnouncementComponent = () => {
  const { buttonLoadingCars, createAnnouncement, carAtt } =
    useContext(CarsContext);
  const [names, setNames] = useState<File[]>([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<requestAnnouncement>();

  const onSubmit: SubmitHandler<requestAnnouncement> = async (data) => {
    console.log("to aqui");
    const formData = new FormData();

    Object.entries(data).forEach(([key, value]) => {
      formData.append(key, value);
    });
    for (const photo of names!) {
      formData.append("image", photo);
    }
    createAnnouncement(formData);
    carAtt();
  };

  return (
    <CreateAnnouncementeComponentStyle>
      <form encType="multipart/form-data" onSubmit={handleSubmit(onSubmit)}>
        <div className="container-form">
          <div>
            <label htmlFor="nome">Nome</label>
            <input
              {...register("nome", { required: true, minLength: 10 })}
              id="nome"
              type="text"
              placeholder="Nome do anuncio"
            />
            {errors.nome && errors.nome.type === "required" && (
              <p>O nome é obrigatório.</p>
            )}
            {errors.nome && errors.nome.type === "minLength" && (
              <p>O titulo deve ter pelo menos 18 caracteres.</p>
            )}
            <label htmlFor="Marca">Marca</label>
            <input
              {...register("marca", { required: true, minLength: 4 })}
              id="Marca"
              type="text"
              placeholder="Marca do veículo"
            />
            {errors.marca && errors.marca.type === "required" && (
              <p>A Marca é obrigatória.</p>
            )}
            {errors.marca && errors.marca.type === "minLength" && (
              <p>A marca deve ter pelo menos 4 caracteres.</p>
            )}
            <label htmlFor="Modelo">Modelo</label>
            <input
              {...register("model", { required: true, minLength: 2 })}
              id="Modelo"
              type="text"
              placeholder="Modelo do veículo"
            />
            {errors.model && errors.model.type === "required" && (
              <p>O modelo é obrigatório.</p>
            )}
            {errors.model && errors.model.type === "minLength" && (
              <p>O modelo deve ter pelo menos 5 caracteres.</p>
            )}

            <div className="photo-div">
              <label htmlFor="label-photo">Fotos</label>
              <label className="label-photo" htmlFor="Fotos">
                <h2>+</h2>
              </label>
              <input
                {...register("image", {
                  required: "Insira pelo menos 1 foto",
                })}
                id="Fotos"
                type="file"
                name="images"
                multiple
                placeholder="Insira suas fotos"
                onChange={(e) => {
                  if (e.target.files) {
                    const newPhotos = Array.from(e.target.files);
                    setNames(newPhotos);
                  }
                }}
              />
              {errors.image && errors.image.type === "required" && (
                <p>Insira pelo menos uma imagem.</p>
              )}
            </div>
            <div>
              {names.map((e: { name: string }) => {
                return <p>{e.name}</p>;
              })}
            </div>

            <label htmlFor="Ano">Ano</label>
            <input
              {...register("ano", { required: true, min: 1900, max: 2023 })}
              id="Ano"
              type="number"
              placeholder="Ano do veículo"
            />
            {errors.ano && errors.ano.type === "required" && (
              <p>O Ano é obrigatório.</p>
            )}
            {(errors.ano && errors.ano.type === "min") ||
              (errors.ano && errors.ano.type === "max" && <p>Data Invalida</p>)}
            <label htmlFor="Valor">Valor</label>
            <input
              {...register("valor", { required: true, minLength: 4 })}
              id="Valor"
              type="number"
              placeholder="Valor de venda"
            />
            {errors.valor && errors.valor.type === "required" && (
              <p>O Valor é obrigatório.</p>
            )}
            {errors.valor && errors.valor.type === "minLength" && (
              <p>O Valor deve ter pelo menos 4 caracteres.</p>
            )}
          </div>
          <div>
            <label htmlFor="KM">KM</label>
            <input
              {...register("km", { required: true, max: 900000 })}
              id="KM"
              type="number"
              placeholder="KM Total"
            />
            {errors.km && errors.km.type === "required" && (
              <p>O km é obrigatório.</p>
            )}
            <label htmlFor="Placa">Placa</label>
            <input
              {...register("placa", {
                required: true,
                minLength: 4,
                maxLength: 7,
              })}
              id="Placa"
              type="text"
              placeholder="Placa do veículo"
            />
            {errors.placa && errors.placa.type === "required" && (
              <p>A Placa é obrigatório.</p>
            )}
            {errors.placa && errors.placa.type === "minLength" && (
              <p>A Placa deve ter pelo menos 4 caracteres.</p>
            )}
            {errors.placa && errors.placa.type === "maxLength" && (
              <p>A Placa deve ter no máximo 7 caracteres.</p>
            )}
            <label htmlFor="Cor">Cor</label>
            <input
              {...register("cor", {
                required: true,
                minLength: 4,
                maxLength: 10,
              })}
              id="Cor"
              type="text"
              placeholder="Cor do veículo"
            />
            {errors.cor && errors.cor.type === "required" && (
              <p>A cor é obrigatória.</p>
            )}
            {errors.cor && errors.cor.type === "minLength" && (
              <p>A cor deve ter pelo menos 4 caracteres.</p>
            )}
            <label htmlFor="Transmissao">Transmissão</label>
            <select
              {...register("transmissao", { required: true })}
              name="transmissao"
              id="Transmissao"
            >
              <option value="A">Automático</option>
              <option value="M">Manual</option>
            </select>
            <label htmlFor="Descricao">Descricao</label>
            <textarea
              className="description-input"
              {...register("descricao", { required: true, minLength: 10 })}
              id="Descricao"
              placeholder="Insira sua descrição do anúncio"
            />
            {errors.descricao && errors.descricao.type === "required" && (
              <p>A Descrição é obrigatória.</p>
            )}
            {errors.descricao && errors.descricao.type === "minLength" && (
              <p>A descricao deve ter pelo menos 20 caracteres.</p>
            )}
          </div>
        </div>
        <button type="submit" className="submit-button">
          {buttonLoadingCars ? "Carregando..." : "Criar Anúncio"}
        </button>
      </form>
    </CreateAnnouncementeComponentStyle>
  );
};
