package Kadri.model;

import org.eclipse.persistence.annotations.Convert;
import org.eclipse.persistence.annotations.Converter;
import Kadri.utils.UUIDConverter;

import javax.persistence.*;
import java.util.UUID;

import com.sap.olingo.jpa.metadata.core.edm.annotation.EdmIgnore;

/**
 * Entity implementation class for Entity: Проверяемые
 */
@Entity(name = "IISKadriПроверяемые")
@Table(schema = "public", name = "Проверяемые")
public class Proveryaemye {

    @Id
    @Converter(converterClass = UUIDConverter.class, name = "primarykey")
    @Convert("primarykey")
    @Column(name = "primarykey", length = 16, unique = true, nullable = false)
    private UUID primarykey;

    @Column(name = "Результат")
    private String результат;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Sotrudnik")
    @Convert("Sotrudnik")
    @Column(name = "Сотрудник", length = 16, unique = true, nullable = false)
    private UUID _sotrudnikid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Sotrudnik", insertable = false, updatable = false)
    private Sotrudniki sotrudnik;

    @EdmIgnore
    @Converter(converterClass = UUIDConverter.class, name = "Kontrol_TZ")
    @Convert("Kontrol_TZ")
    @Column(name = "Контроль_ТЗ", length = 16, unique = true, nullable = false)
    private UUID _kontrol_tzid;

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "Kontrol_TZ", insertable = false, updatable = false)
    private Kontrol_TZ kontrol_tz;


    public Proveryaemye() {
        super();
    }

    public void setPrimarykey(UUID primarykey) {
        this.primarykey = primarykey;
    }

    public UUID getPrimarykey() {
        return primarykey;
    }

    public String getРезультат() {
      return результат;
    }

    public void setРезультат(String результат) {
      this.результат = результат;
    }


}