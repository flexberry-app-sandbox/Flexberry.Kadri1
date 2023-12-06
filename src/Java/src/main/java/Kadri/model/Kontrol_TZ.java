package Kadri.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kadri.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import java.util.Date;
import java.util.List;

/**
 * Entity implementation class for Entity: Контроль_ТЗ
 */
@Entity(name = "IISKadriКонтроль_ТЗ")
@Table(schema = "public", name = "Контроль_ТЗ")
public class Kontrol_TZ {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "ID")
    private Integer id;

    @Column(name = "Дата_проверки")
    private Date дата_проверки;

    @OneToMany(mappedBy = "kontrol_tz", fetch = FetchType.LAZY, cascade = CascadeType.REMOVE)
    private List<Proveryaemye> proveryaemyes;


    public Kontrol_TZ() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public Integer getID() {
      return id;
    }

    public void setID(Integer id) {
      this.id = id;
    }

    public Date getДата_проверки() {
      return дата_проверки;
    }

    public void setДата_проверки(Date дата_проверки) {
      this.дата_проверки = дата_проверки;
    }


}