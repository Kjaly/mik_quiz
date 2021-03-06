import React from 'react';
import {
  StyledTextSection, StyledImg,
  StyledText
} from './AboutTextSection.styled';
import { ContentWrapper } from '../ContentWrapper';
import textImg from '../../assets/images/banner/mainImage3.jpg'
import { useSelector } from 'react-redux';
import { getContentSelector } from '../../store/pages/selectors';

export const AboutTextSection: React.FC = () => {
  const content = useSelector(getContentSelector)

  return (
    <ContentWrapper>
      {content ? (
        <StyledTextSection dangerouslySetInnerHTML={{__html: content}} />
      ) : (
        <StyledTextSection>
          <StyledImg>
            <img src={textImg} alt=""/>
          </StyledImg>
          <StyledText>
            <p>Проект <b>«Славные дороги прошлого - маршрут в будущее России»</b> реализуется
              при поддержке Министерства Просвещения РФ. Он приурочен к 800-летию со дня
              рождения святого благоверного князя Александра Невского и 75-летию образования
              Калининградской области. Проект направлен на формирование и укрепление у
              старшеклассников интереса и уважительного отношения к истории и культуре родного
              края, а также ближайших российских регионов. Подростки, ставшие участниками
              викторины и конкурса видеороликов, будут нацелены на продвижение туристических
              маршрутов своего региона и станут мотивированы к путешествиям по другим российским
              областям.
            </p>
            <p>
              Первым этапом проекта является Межрегиональная онлайн-викторина по истории
              России. В ней примут участие 1000 школьников из Калининградской и Псковской
              областей. Онлайн-викторина разработана нашими экспертами для учащихся 9-11 классов
              средних школ Калининградской и Псковской областей. Она включает 20 вопросов,
              затрагивающих восемь столетий истории Отечества и написание эссе на заданную тему.
            </p>
            <p>
              Для того чтобы стать участником онлайн-викторины, необходимо пройти
              регистрацию, указав: ФИО, дату рождения, населённый пункт проживания,
              номер/наименование школы и класс, ФИО учителя истории, контактный телефон
              участника и адрес электронной почты (E-mail).
            </p>
            <p>
              Старт викторины и регистрации - 25 сентября 2021 года в 09.00 (по московскому
              времени).<br/>
              Проведение викторины - 25 сентября 2021 года с 9.00 до 21.00 (по московскому времени).
            </p>
            <p>
              Список полуфиналистов будет опубликован на сайте проекта 11 октября 2021 года после
              12:00 (по московскому времени).
            </p>
            <p>
              100 полуфиналистов примут участие в региональных слетах. На этом этапе
              школьники получат возможность отправиться на экскурсии по военно-историческим
              маршрутам родного края вместе с экспертами и наставниками, принять участие в
              конкурсе видеороликов, посвященных военно-историческим маршрутам Калининградской
              и Псковской областей.
            </p>
            <p>
              Авторы 10 лучших работ от каждой области станут участниками межрегиональных
              слетов. Победители калининградского этапа отправятся в Псков, а псковитяне посетят
              Калининград.
            </p>
            <p>
              После посещения двух областей дети–победители викторины и конкурса
              видеороликов подготовят и сами проведут уроки и презентации своих работ среди
              учеников своей школы. Ребята примут самое активное участие в продвижении
              отечественных туристских маршрутов среди молодых людей Калининградской и
              Псковской областей. Состоится культурный и туристский обмен между учащимися двух
              западных регионов страны, который поможет сблизить ребят двух соседних областей,
              помочь молодым людям научиться формировать собственное мнение, отстаивать свою
              точку зрения, в том числе касающуюся взглядов на историю и культуру России в свете
              участившихся фальсификаций и подмены понятий.
            </p>
            <p>
              Проект реализуется при поддержке Министерства Просвещения РФ, Министерства
              по культуре и туризму Калининградской области, Министерства образования
              Калининградской области, Комитета образования Псковской области, Комитета по
              туризму Псковской области, Общенационального Союза Индустрии Гостеприимства.
            </p>
            <p>
              Методическое сопровождение проекта осуществляется при поддержке Российского
              военно-исторического общества, Калининградской областной научной библиотеки, БФУ
              им. И. Канта.
            </p>
            <p>
              Содействие в организации экскурсионных маршрутов, региональных и
              межрегиональных слетов оказывают туроператоры ООО «Мик-Авиа», ООО «Славянский
              тур».
            </p>

          </StyledText>
        </StyledTextSection>
      )}

    </ContentWrapper>
  );
};
