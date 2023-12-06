package Kadri.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kadri.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Анкеты
 */
@Entity(name = "IISKadriАнкеты")
@Table(schema = "public", name = "Анкеты")
public class Ankety {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Опыт_работы")
    private String опыт_работы;

    @Column(name = "ЛК")
    private String лк;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "ФИО")
    private String фио;

    @Column(name = "Контакты")
    private String контакты;

    @Column(name = "Образование")
    private String образование;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Vakansiya")
    @Convert("Vakansiya")
    @Column(name = "Вакансия", length = 16, unique = true, nullable = false)
    private UUID _vakansiyaid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Vakansiya", insertable = false, updatable = false)
    private Dolzhnosti vakansiya;


    public Ankety() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getОпыт_работы() {
      return опыт_работы;
    }

    public void setОпыт_работы(String опыт_работы) {
      this.опыт_работы = опыт_работы;
    }

    public String getЛК() {
      return лк;
    }

    public void setЛК(String лк) {
      this.лк = лк;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public String getФИО() {
      return фио;
    }

    public void setФИО(String фио) {
      this.фио = фио;
    }

    public String getКонтакты() {
      return контакты;
    }

    public void setКонтакты(String контакты) {
      this.контакты = контакты;
    }

    public String getОбразование() {
      return образование;
    }

    public void setОбразование(String образование) {
      this.образование = образование;
    }


}