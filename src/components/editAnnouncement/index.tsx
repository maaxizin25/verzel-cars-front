import { useContext } from "react";
import { EditAnnouncementStyle } from "./style";
import { CarsContext } from "../../context/carsContext";
import { SubmitHandler, useForm } from "react-hook-form";
import { tAnnouncement } from "../../context/carsContext/types";

export const EditAnnouncement = () => {
  const { announcementMark, updateAnnouncement, buttonLoadingCars } =
    useContext(CarsContext);
  const announcements = announcementMark!;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<tAnnouncement>();

  const onSubmit: SubmitHandler<tAnnouncement> = (data) => {
    updateAnnouncement(data);
  };

  return (
    <EditAnnouncementStyle>
      <span>
        <h2>Editar anúncio</h2>
      </span>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label htmlFor="nome">Nome</label>
          <input
            {...register("nome", { required: true, minLength: 18 })}
            id="nome"
            type="text"
            defaultValue={announcements.nome}
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
            defaultValue={announcements.marca}
          />
          {errors.marca && errors.marca.type === "required" && (
            <p>A Marca é obrigatória.</p>
          )}
          {errors.marca && errors.marca.type === "minLength" && (
            <p>A marca deve ter pelo menos 4 caracteres.</p>
          )}
          <label htmlFor="Modelo">Modelo</label>
          <input
            {...register("model", { required: true, minLength: 5 })}
            id="Modelo"
            defaultValue={announcements.model}
            type="text"
          />
          {errors.model && errors.model.type === "required" && (
            <p>O modelo é obrigatório.</p>
          )}
          {errors.model && errors.model.type === "minLength" && (
            <p>O modelo deve ter pelo menos 5 caracteres.</p>
          )}
          <label htmlFor="Ano">Ano</label>
          <input
            {...register("ano", { required: true, minLength: 4 })}
            id="Ano"
            type="number"
            defaultValue={announcements.ano}
          />
          {errors.ano && errors.ano.type === "required" && (
            <p>O Ano é obrigatório.</p>
          )}
          {errors.ano && errors.ano.type === "minLength" && (
            <p>O Ano deve ter pelo menos 4 caracteres.</p>
          )}
          <label htmlFor="Valor">Valor</label>
          <input
            {...register("valor", { required: true, minLength: 4 })}
            id="Valor"
            type="number"
            defaultValue={announcements.valor}
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
            {...register("km", { required: true })}
            id="KM"
            type="number"
            defaultValue={announcements.km}
          />
          {errors.km && errors.km.type === "required" && (
            <p>O km é obrigatório.</p>
          )}
          <label htmlFor="Placa">Placa</label>
          <input
            {...register("placa", { required: true, minLength: 4 })}
            id="Placa"
            type="text"
            defaultValue={announcements.placa}
          />
          {errors.placa && errors.placa.type === "required" && (
            <p>A Placa é obrigatório.</p>
          )}
          {errors.placa && errors.placa.type === "minLength" && (
            <p>A Placa deve ter pelo menos 4 caracteres.</p>
          )}
          <label htmlFor="Cor">Cor</label>
          <input
            {...register("cor", { required: true, minLength: 4 })}
            id="Cor"
            type="text"
            defaultValue={announcements.cor}
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
            defaultValue={announcements.transmissao == "A" ? "A" : "M"}
          >
            <option value="A">Automático</option>
            <option value="M">Manual</option>
          </select>
          <label htmlFor="Descricao">Descricao</label>
          <input
            {...register("descricao", { required: true, minLength: 20 })}
            id="Descricao"
            type="textarea"
            defaultValue={announcements.descricao}
          />
          {errors.descricao && errors.descricao.type === "required" && (
            <p>A Descrição é obrigatória.</p>
          )}
          {errors.descricao && errors.descricao.type === "minLength" && (
            <p>A descricao deve ter pelo menos 20 caracteres.</p>
          )}
        </div>
        <button type="submit" className="submit-button">
          {buttonLoadingCars ? "Carregando..." : "Salvar alterações"}
        </button>
      </form>
    </EditAnnouncementStyle>
  );
};
