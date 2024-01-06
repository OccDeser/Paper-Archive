# Asiacrypt[2019-3]
## Approximate Trapdoors for Lattices and Smaller Hash-and-Sign Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#approximate-trapdoors-for-lattices-and-smaller-hash-and-sign-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#approximate-trapdoors-for-lattices-and-smaller-hash-and-sign-signatures)
### Authors
* Yilei Chen, Visa Research, Palo Alto, USA
* Pratyay Mukherjee, Visa Research, Palo Alto, USA
* Nicholas Genise, University of California, San Diego, USA
### Abstract
> We study a relaxed notion of lattice trapdoor called approximate trapdoor, which is defined to be able to invert Ajtai’s one-way function approximately instead of exactly. The primary motivation of our study is to improve the efficiency of the cryptosystems built from lattice trapdoors, including the hash-and-sign signatures.
> 
> Our main contribution is to construct an approximate trapdoor by modifying the gadget trapdoor proposed by Micciancio and Peikert [Eurocrypt 2012]. In particular, we show how to use the approximate gadget trapdoor to sample short preimages from a distribution that is simulatable without knowing the trapdoor. The analysis of the distribution uses a theorem (implicitly used in past works) regarding linear transformations of discrete Gaussians on lattices.
> 
> Our approximate gadget trapdoor can be used together with the existing optimization techniques to improve the concrete performance of the hash-and-sign signature in the random oracle model under (Ring-)LWE and (Ring-)SIS assumptions. Our implementation shows that the sizes of the public-key & signature can be reduced by half from those in schemes built from exact trapdoors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_1](https://doi.org/10.1007/978-3-030-34618-8_1)
## Decisional Second-Preimage Resistance: When Does SPR Imply PRE?
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#decisional-second-preimage-resistance-when-does-spr-imply-pre)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#decisional-second-preimage-resistance-when-does-spr-imply-pre)
### Authors
* Daniel J. Bernstein, Department of Computer Science, University of Illinois at Chicago, Chicago, IL, 60607-7045, USA
* Daniel J. Bernstein, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Andreas Hülsing, Department of Mathematics and Computer Science, Technische Universiteit Eindhoven, P.O. Box 513, 5600 MB, Eindhoven, The Netherlands
### Abstract
> There is a well-known gap between second-preimage resistance and preimage resistance for length-preserving hash functions. This paper introduces a simple concept that fills this gap. One consequence of this concept is that tight reductions can remove interactivity for multi-target length-preserving preimage problems, such as the problems that appear in analyzing hash-based signature systems. Previous reduction techniques applied to only a negligible fraction of all length-preserving hash functions, presumably excluding all off-the-shelf hash functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_2](https://doi.org/10.1007/978-3-030-34618-8_2)
## Structure-Preserving Signatures on Equivalence Classes from Standard Assumptions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#structure-preserving-signatures-on-equivalence-classes-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#structure-preserving-signatures-on-equivalence-classes-from-standard-assumptions)
### Authors
* Mojtaba Khalili, Isfahan University of Technology, Isfahan, Iran
* Mohammad Dakhilalian, Isfahan University of Technology, Isfahan, Iran
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
### Abstract
> Structure-preserving signatures on equivalence classes (SPS-EQ) introduced at ASIACRYPT 2014 are a variant of SPS where a message is considered as a projective equivalence class, and a new representative of the same class can be obtained by multiplying a vector by a scalar. Given a message and corresponding signature, anyone can produce an updated and randomized signature on an arbitrary representative from the same equivalence class. SPS-EQ have proven to be a very versatile building block for many cryptographic applications.
> 
> In this paper, we present the first EUF-CMA secure SPS-EQ scheme under standard assumptions. So far only constructions in the generic group model are known. One recent candidate under standard assumptions are the weakly secure equivalence class signatures by Fuchsbauer and Gay (PKC’18), a variant of SPS-EQ satisfying only a weaker unforgeability and adaption notion. Fuchsbauer and Gay show that this weaker unforgeability notion is sufficient for many known applications of SPS-EQ. Unfortunately, the weaker adaption notion is only proper for a semi-honest (passive) model and as we show in this paper, makes their scheme unusable in the current models for almost all of their advertised applications of SPS-EQ from the literature.
> 
> We then present a new EUF-CMA secure SPS-EQ scheme with a tight security reduction under the SXDH assumption providing the notion of perfect adaption (under malicious keys). To achieve the strongest notion of perfect adaption under malicious keys, we require a common reference string (CRS), which seems inherent for constructions under standard assumptions. However, for most known applications of SPS-EQ we do not require a trusted CRS (as the CRS can be generated by the signer during key generation). Technically, our construction is inspired by a recent work of Gay et al. (EUROCRYPT’18), who construct a tightly secure message authentication code and translate it to an SPS scheme adapting techniques due to Bellare and Goldwasser (CRYPTO’89).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_3](https://doi.org/10.1007/978-3-030-34618-8_3)
## Simple and Efficient KDM-CCA Secure Public Key Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#simple-and-efficient-kdm-cca-secure-public-key-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#simple-and-efficient-kdm-cca-secure-public-key-encryption)
### Authors
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Takahiro Matsuda, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
### Abstract
> We propose two efficient public key encryption (PKE) schemes satisfying key dependent message security against chosen ciphertext attacks (KDM-CCA security). The first one is KDM-CCA secure with respect to affine functions. The other one is KDM-CCA secure with respect to polynomial functions. Both of our schemes are based on the KDM-CPA secure PKE schemes proposed by Malkin, Teranishi, and Yung (EUROCRYPT 2011). Although our schemes satisfy KDM-CCA security, their efficiency overheads compared to Malkin et al.’s schemes are very small. Thus, efficiency of our schemes is drastically improved compared to the existing KDM-CCA secure schemes.
> 
> We achieve our results by extending the construction technique by Kitagawa and Tanaka (ASIACRYPT 2018). Our schemes are obtained via semi-generic constructions using an IND-CCA secure PKE scheme as a building block. We prove the KDM-CCA security of our schemes based on the decisional composite residuosity (DCR) assumption and the IND-CCA security of the building block PKE scheme.
> 
> Moreover, our security proofs are tight if the IND-CCA security of the building block PKE scheme is tightly reduced to its underlying computational assumption. By instantiating our schemes using existing tightly IND-CCA secure PKE schemes, we obtain the first tightly KDM-CCA secure PKE schemes whose ciphertext consists only of a constant number of group elements.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_4](https://doi.org/10.1007/978-3-030-34618-8_4)
## Non-Committing Encryption with Quasi-Optimal Ciphertext-Rate Based on the DDH Problem.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#non-committing-encryption-with-quasi-optimal-ciphertext-rate-based-on-the-ddh-problem)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#non-committing-encryption-with-quasi-optimal-ciphertext-rate-based-on-the-ddh-problem)
### Authors
* Yusuke Yoshida, Tokyo Institute of Technology, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> Non-committing encryption (NCE) was introduced by Canetti et al. (STOC ’96). Informally, an encryption scheme is non-committing if it can generate a dummy ciphertext that is indistinguishable from a real one. The dummy ciphertext can be opened to any message later by producing a secret key and an encryption random coin which “explain” the ciphertext as an encryption of the message. Canetti et al. showed that NCE is a central tool to achieve multi-party computation protocols secure in the adaptive setting. An important measure of the efficiently of NCE is the ciphertext rate, that is the ciphertext length divided by the message length, and previous works studying NCE have focused on constructing NCE schemes with better ciphertext rates.
> 
> We propose an NCE scheme satisfying the ciphertext rate based on the decisional Diffie-Hellman (DDH) problem, where is the security parameter. The proposed construction achieves the best ciphertext rate among existing constructions proposed in the plain model, that is, the model without using common reference strings. Previously to our work, an NCE scheme with the best ciphertext rate based on the DDH problem was the one proposed by Choi et al. (ASIACRYPT ’09) that has ciphertext rate . Our construction of NCE is similar in spirit to that of the recent construction of the trapdoor function proposed by Garg and Hajiabadi (CRYPTO ’18).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_5](https://doi.org/10.1007/978-3-030-34618-8_5)
## Structure-Preserving and Re-randomizable RCCA-Secure Public Key Encryption and Its Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#structure-preserving-and-re-randomizable-rcca-secure-public-key-encryption-and-its-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#structure-preserving-and-re-randomizable-rcca-secure-public-key-encryption-and-its-applications)
### Authors
* Antonio Faonio, IMDEA Software Institute, Madrid, Spain
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Javier Herranz, Cybercat and Universitat Politècnica de Catalunya, Barcelona, Spain
* Carla Ràfols, Cybercat and Universitat Pompeu Fabra, Barcelona, Spain
### Abstract
> Re-randomizable RCCA-secure public key encryption (Rand-RCCA PKE) schemes reconcile the property of re-randomizability of the ciphertexts with the need of security against chosen-ciphertexts attacks. In this paper we give a new construction of a Rand-RCCA PKE scheme that is perfectly re-randomizable. Our construction is structure-preserving, can be instantiated over Type-3 pairing groups, and achieves better computation and communication efficiency than the state of the art perfectly re-randomizable schemes (e.g., Prabhakaran and Rosulek, CRYPTO’07). Next, we revive the Rand-RCCA notion showing new applications where our Rand-RCCA PKE scheme plays a fundamental part: (1) We show how to turn our scheme into a publicly-verifiable Rand-RCCA scheme; (2) We construct a malleable NIZK with a (variant of) simulation soundness that allows for re-randomizability; (3) We propose a new UC-secure Verifiable Mix-Net protocol that is secure in the common reference string model. Thanks to the structure-preserving property, all these applications are efficient. Notably, our Mix-Net protocol is the most efficient universally verifiable Mix-Net (without random oracle) where the CRS is an uniformly random string of size independent of the number of senders. The property is of the essence when such protocols are used in large scale.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_6](https://doi.org/10.1007/978-3-030-34618-8_6)
## iUC: Flexible Universal Composability Made Simple.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#iuc-flexible-universal-composability-made-simple)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#iuc-flexible-universal-composability-made-simple)
### Authors
* Jan Camenisch, Dfinity, Zurich, Switzerland
* Stephan Krenn, AIT Austrian Institute of Technology GmbH, Vienna, Austria
* Ralf Küsters, University of Stuttgart, Stuttgart, Germany
* Daniel Rausch, University of Stuttgart, Stuttgart, Germany
### Abstract
> Proving the security of complex protocols is a crucial and very challenging task. A widely used approach for reasoning about such protocols in a modular way is universal composability. A perfect model for universal composability should provide a sound basis for formal proofs and be very flexible in order to allow for modeling a multitude of different protocols. It should also be easy to use, including useful design conventions for repetitive modeling aspects, such as corruption, parties, sessions, and subroutine relationships, such that protocol designers can focus on the core logic of their protocols.
> 
> While many models for universal composability exist, including the UC, GNUC, and IITM models, none of them has achieved this ideal goal yet. As a result, protocols cannot be modeled faithfully and/or using these models is a burden rather than a help, often even leading to underspecified protocols and formally incorrect proofs.
> 
> Given this dire state of affairs, the goal of this work is to provide a framework for universal composability which combines soundness, flexibility, and usability in an unmatched way. Developing such a security framework is a very difficult and delicate task, as the long history of frameworks for universal composability shows.
> 
> We build our framework, called iUC, on top of the IITM model, which already provides soundness and flexibility while lacking sufficient usability. At the core of iUC is a single simple template for specifying essentially arbitrary protocols in a convenient, formally precise, and flexible way. We illustrate the main features of our framework with example functionalities and realizations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_7](https://doi.org/10.1007/978-3-030-34618-8_7)
## Leakage Resilience of the Duplex Construction.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#leakage-resilience-of-the-duplex-construction)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#leakage-resilience-of-the-duplex-construction)
### Authors
* Christoph Dobraunig, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> Side-channel attacks, especially differential power analysis (DPA), pose a serious threat to cryptographic implementations deployed in a malicious environment. One way to counter side-channel attacks is to design cryptographic schemes to withstand them, an area that is covered amongst others by leakage resilient cryptography. So far, however, leakage resilient cryptography has predominantly focused on block cipher based designs, and insights in permutation based leakage resilient cryptography are scarce. In this work, we consider leakage resilience of the keyed duplex construction: we present a model for leakage resilient duplexing, derive a fine-grained bound on the security of the keyed duplex in said model, and map it to ideas of Taha and Schaumont (HOST 2014) and Dobraunig et al. (ToSC 2017) in order to use the duplex in a leakage resilient manner.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_8](https://doi.org/10.1007/978-3-030-34618-8_8)
## A Critical Analysis of ISO 17825 ('Testing Methods for the Mitigation of Non-invasive Attack Classes Against Cryptographic Modules').
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#a-critical-analysis-of-iso-17825-testing-methods-for-the-mitigation-of-non-invasive-attack-classes-against-cryptographic-modules)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#a-critical-analysis-of-iso-17825-testing-methods-for-the-mitigation-of-non-invasive-attack-classes-against-cryptographic-modules)
### Authors
* Carolyn Whitnall, University of Bristol, Bristol, UK
* Elisabeth Oswald, University of Bristol, Bristol, UK
* Elisabeth Oswald, University of Klagenfurt, Klagenfurt, Austria
### Abstract
> The ISO standardisation of ‘Testing methods for the mitigation of non-invasive attack classes against cryptographic modules’ (ISO/IEC 17825:2016) specifies the use of the Test Vector Leakage Assessment (TVLA) framework as the sole measure to assess whether or not an implementation of (symmetric) cryptography is vulnerable to differential side-channel attacks. It is the only publicly available standard of this kind, and the first side-channel assessment regime to exclusively rely on a TVLA instantiation.
> 
> TVLA essentially specifies statistical leakage detection tests with the aim of removing the burden of having to test against an ever increasing number of attack vectors. It offers the tantalising prospect of ‘conformance testing’: if a device passes TVLA, then, one is led to hope, the device would be secure against all (first-order) differential side-channel attacks.
> 
> In this paper we provide a statistical assessment of the specific instantiation of TVLA in this standard. This task leads us to inquire whether (or not) it is possible to assess the side-channel security of a device via leakage detection (TVLA) only. We find a number of grave issues in the standard and its adaptation of the original TVLA guidelines. We propose some innovations on existing methodologies and finish by giving recommendations for best practice and the responsible reporting of outcomes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_9](https://doi.org/10.1007/978-3-030-34618-8_9)
## Location, Location, Location: Revisiting Modeling and Exploitation for Location-Based Side Channel Leakages.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#location-location-location-revisiting-modeling-and-exploitation-for-location-based-side-channel-leakages)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#location-location-location-revisiting-modeling-and-exploitation-for-location-based-side-channel-leakages)
### Authors
* Christos Andrikos, National Techical University of Athens, Athens, Greece
* Giorgos Rassias, National Techical University of Athens, Athens, Greece
* Lejla Batina, Radboud University, Nijmegen, The Netherlands
* Lukasz Chmielewski, Radboud University, Nijmegen, The Netherlands
* Kostas Papagiannopoulos, Radboud University, Nijmegen, The Netherlands
* Kostas Papagiannopoulos, NXP Semiconductors, Hamburg, Germany
* Lukasz Chmielewski, Riscure BV, Delft, The Netherlands
* Guilherme Perin, Riscure BV, Delft, The Netherlands
* Liran Lerman, Thales Belgium, Herstal, Belgium
* Vasilios Mavroudis, University College London, London, England
* Alberto Sonnino, University College London, London, England
### Abstract
> Near-field microprobes have the capability to isolate small regions of a chip surface and enable precise measurements with high spatial resolution. Being able to distinguish the activity of small regions has given rise to the location-based side-channel attacks, which exploit the spatial dependencies of cryptographic algorithms in order to recover the secret key. Given the fairly uncharted nature of such leakages, this work revisits the location side-channel to broaden our modeling and exploitation capabilities. Our contribution is threefold. First, we provide a simple spatial model that partially captures the effect of location-based leakages. We use the newly established model to simulate the leakage of different scenarios/countermeasures and follow an information-theoretic approach to evaluate the security level achieved in every case. Second, we perform the first successful location-based attack on the SRAM of a modern ARM Cortex-M4 chip, using standard techniques such as difference of means and multivariate template attacks. Third, we put forward neural networks as classifiers that exploit the location side-channel and showcase their effectiveness on ARM Cortex-M4, especially in the context of single-shot attacks and small memory regions. Template attacks and neural network classifiers are able to reach high spacial accuracy, distinguishing between 2 SRAM regions of 128 bytes each with 100% success rate and distinguishing even between 256 SRAM byte-regions with 32% success rate. Such improved exploitation capabilities revitalize the interest for location vulnerabilities on various implementations, ranging from RSA/ECC with large memory footprint, to lookup-table-based AES with smaller memory usage.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_10](https://doi.org/10.1007/978-3-030-34618-8_10)
## Simple Refreshing in the Noisy Leakage Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#simple-refreshing-in-the-noisy-leakage-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#simple-refreshing-in-the-noisy-leakage-model)
### Authors
* Stefan Dziembowski, University of Warsaw, Warsaw, Poland
* Karol Żebrowski, University of Warsaw, Warsaw, Poland
* Sebastian Faust, TU Darmstadt, Darmstadt, Germany
### Abstract
> Masking schemes are a prominent countermeasure against power analysis and work by concealing the values that are produced during the computation through randomness. The randomness is typically injected into the masked algorithm using a so-called refreshing scheme, which is placed after each masked operation, and hence is one of the main bottlenecks for designing efficient masking schemes. The main contribution of our work is to investigate the security of a very simple and efficient refreshing scheme and prove its security in the noisy leakage model (EUROCRYPT’13). Compared to earlier constructions our refreshing is significantly more efficient and uses only n random values and \({<}2n\) operations, where n is the security parameter. In addition we show how our refreshing can be used in more complex masked computation in the presence of noisy leakage. Our results are established using a new methodology for analyzing masking schemes in the noisy leakage model, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_11](https://doi.org/10.1007/978-3-030-34618-8_11)
## The Exchange Attack: How to Distinguish Six Rounds of AES with 2^88.2 Chosen Plaintexts.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#the-exchange-attack-how-to-distinguish-six-rounds-of-aes-with-2-88-2-chosen-plaintexts)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#the-exchange-attack-how-to-distinguish-six-rounds-of-aes-with-2-88-2-chosen-plaintexts)
### Authors
* Navid Ghaedi Bardeh, Department of Informatics, University of Bergen, 5020, Bergen, Norway
* Sondre Rønjom, Department of Informatics, University of Bergen, 5020, Bergen, Norway
### Abstract
> In this paper we present exchange-equivalence attacks which is a new cryptanalytic attack technique suitable for SPN-like block cipher designs. Our new technique results in the first secret-key chosen plaintext distinguisher for 6-round AES. The complexity of the distinguisher is about \(2^{88.2}\) in terms of data, memory and computational complexity. The distinguishing attack for AES reduced to six rounds is a straight-forward extension of an exchange attack for 5-round AES that requires \(2^{30}\) in terms of chosen plaintexts and computation. This is also a new record for AES reduced to five rounds. The main result of this paper is that AES up to at least six rounds is biased when restricted to exchange-invariant sets of plaintexts.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_12](https://doi.org/10.1007/978-3-030-34618-8_12)
## Algebraic Cryptanalysis of STARK-Friendly Designs: Application to MARVELlous and MiMC.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#algebraic-cryptanalysis-of-stark-friendly-designs-application-to-marvellous-and-mimc)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#algebraic-cryptanalysis-of-stark-friendly-designs-application-to-marvellous-and-mimc)
### Authors
* Martin R. Albrecht, Information Security Group, Royal Holloway, University of London, London, UK
* Carlos Cid, Information Security Group, Royal Holloway, University of London, London, UK
* Carlos Cid, Simula UiB, Bergen, Norway
* Dmitry Khovratovich, Dusk Network, Amsterdam, The Netherlands
* Dmitry Khovratovich, ABDK Consulting, Tallinn, Estonia
* Lorenzo Grassi, IAIK, Graz University of Technology, Graz, Austria
* Reinhard Lüftenegger, IAIK, Graz University of Technology, Graz, Austria
* Christian Rechberger, IAIK, Graz University of Technology, Graz, Austria
* Markus Schofnegger, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, Know-Center, Graz, Austria
* Dmitry Khovratovich, Evernym Inc., Salt Lake City, USA
### Abstract
> The block cipher Jarvis and the hash function Friday, both members of the MARVELlous family of cryptographic primitives, are among the first proposed solutions to the problem of designing symmetric-key algorithms suitable for transparent, post-quantum secure zero-knowledge proof systems such as ZK-STARKs. In this paper we describe an algebraic cryptanalysis of Jarvis and Friday and show that the proposed number of rounds is not sufficient to provide adequate security. In Jarvis, the round function is obtained by combining a finite field inversion, a full-degree affine permutation polynomial and a key addition. Yet we show that even though the high degree of the affine polynomial may prevent some algebraic attacks (as claimed by the designers), the particular algebraic properties of the round function make both Jarvis and Friday vulnerable to Gröbner basis attacks. We also consider MiMC, a block cipher similar in structure to Jarvis. However, this cipher proves to be resistant against our proposed attack strategy. Still, our successful cryptanalysis of Jarvis and Friday does illustrate that block cipher designs for “algebraic platforms” such as STARKs, FHE or MPC may be particularly vulnerable to algebraic attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_13](https://doi.org/10.1007/978-3-030-34618-8_13)
## MILP-aided Method of Searching Division Property Using Three Subsets and Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#milp-aided-method-of-searching-division-property-using-three-subsets-and-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#milp-aided-method-of-searching-division-property-using-three-subsets-and-applications)
### Authors
* Senpeng Wang, PLA SSF Information Engineering University, Zhengzhou, China
* Bin Hu, PLA SSF Information Engineering University, Zhengzhou, China
* Jie Guan, PLA SSF Information Engineering University, Zhengzhou, China
* Kai Zhang, PLA SSF Information Engineering University, Zhengzhou, China
* Tairong Shi, PLA SSF Information Engineering University, Zhengzhou, China
### Abstract
> Division property is a generalized integral property proposed by Todo at EUROCRYPT 2015, and then conventional bit-based division property (CBDP) and bit-based division property using three subsets (BDPT) were proposed by Todo and Morii at FSE 2016. At the very beginning, the two kinds of bit-based division properties once couldn’t be applied to ciphers with large block size just because of the huge time and memory complexity. At ASIACRYPT 2016, Xiang et al. extended Mixed Integer Linear Programming (MILP) method to search integral distinguishers based on CBDP. BDPT can find more accurate integral distinguishers than CBDP, but it couldn’t be modeled efficiently.
> 
> This paper focuses on the feasibility of searching integral distinguishers based on BDPT. We propose the pruning techniques and fast propagation of BDPT for the first time. Based on these, an MILP-aided method for the propagation of BDPT is proposed. Then, we apply this method to some block ciphers. For SIMON64, PRESENT, and RECTANGLE, we find more balanced bits than the previous longest distinguishers. For LBlock, we find a better 16-round integral distinguisher with less active bits. For other block ciphers, our results are in accordance with the previous longest distinguishers.
> 
> Cube attack is an important cryptanalytic technique against symmetric cryptosystems, especially for stream ciphers. And the most important step in cube attack is superpoly recovery. Inspired by the CBDP based cube attack proposed by Todo at CRYPTO 2017, we propose a method which uses BDPT to recover the superpoly in cube attack. We apply this new method to round-reduced Trivium. To be specific, the time complexity of recovering the superpoly of 832-round Trivium at CRYPTO 2017 is reduced from \(2^{77}\) to practical, and the time complexity of recovering the superpoly of 839-round Trivium at CRYPTO 2018 is reduced from \(2^{79}\) to practical. Then, we propose a theoretical attack which can recover the superpoly of Trivium up to 841 round.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_14](https://doi.org/10.1007/978-3-030-34618-8_14)
## Cryptanalysis of GSM Encryption in 2G/3G Networks Without Rainbow Tables.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#cryptanalysis-of-gsm-encryption-in-2g-3g-networks-without-rainbow-tables)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#cryptanalysis-of-gsm-encryption-in-2g-3g-networks-without-rainbow-tables)
### Authors
* Bin Zhang, TCA, SKLCS, Institute of Software, Chinese Academy of Sciences, Beijing, China
* Bin Zhang, State Key Laboratory of Cryptology, P.O.Box 5159, Beijing, 100878, China
* Bin Zhang, University of Chinese Academy of Sciences, Beijing, 100049, China
* Bin Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### Abstract
> The GSM standard developed by ETSI for 2G networks adopts the A5/1 stream cipher to protect the over-the-air privacy in cell phone and has become the de-facto global standard in mobile communications, though the emerging of subsequent 3G/4G standards. There are many cryptanalytic results available so far and the most notable ones share the need of a heavy pre-computation with large rainbow tables or distributed cracking network. In this paper, we present a fast near collision attack on GSM encryption in 2G/3G networks, which is completely new and more threatening compared to the previous best results. We adapt the fast near collision attack proposed at Eurocrypt 2018 with the concrete irregular clocking manner in A5/1 to have a state recovery attack with a low complexity. It is shown that if the first 64 bits of one keystream frame are available, the secret key of A5/1 can be reliably found in \(2^{31.79}\) cipher ticks, given around 1 MB memory and after the pre-computation of \(2^{20.26}\) cipher ticks. Our current implementation clearly certified the validity of the suggested attack. Due to the fact that A5/3 and GPRS share the same key with A5/1, this can be converted into attacks against any GSM network eventually.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_15](https://doi.org/10.1007/978-3-030-34618-8_15)
## Tightly Secure Inner Product Functional Encryption: Multi-input and Function-Hiding Constructions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#tightly-secure-inner-product-functional-encryption-multi-input-and-function-hiding-constructions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#tightly-secure-inner-product-functional-encryption-multi-input-and-function-hiding-constructions)
### Authors
* Junichi Tomida, NTT, Tokyo, Japan
### Abstract
> Tightly secure cryptographic schemes have been extensively studied in the fields of chosen-ciphertext secure public-key encryption, identity-based encryption, signatures and more. We extend tightly secure cryptography to inner product functional encryption (IPFE) and present the first tightly secure schemes related to IPFE.
> 
> We first construct a new IPFE scheme that is tightly secure in the multi-user and multi-challenge setting. In other words, the security of our scheme does not degrade even if an adversary obtains many ciphertexts generated by many users. Our scheme is constructible on a pairing-free group and secure under the matrix decisional Diffie-Hellman (MDDH) assumption, which is the generalization of the decisional Diffie-Hellman (DDH) assumption. Applying the known conversions by Lin (CRYPTO 2017) and Abdalla et al. (CRYPTO 2018) to our scheme, we can obtain the first tightly secure function-hiding IPFE scheme and multi-input IPFE (MIPFE) scheme respectively.
> 
> Our second main contribution is the proposal of a new generic conversion from function-hiding IPFE to function-hiding MIPFE, which was left as an open problem by Abdalla et al. (CRYPTO 2018). We obtain the first tightly secure function-hiding MIPFE scheme by applying our conversion to the tightly secure function-hiding IPFE scheme described above.
> 
> Finally, the security reductions of all our schemes are fully tight, which means that the security of our schemes is reduced to the MDDH assumption with a constant security loss.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_16](https://doi.org/10.1007/978-3-030-34618-8_16)
## Public-Key Function-Private Hidden Vector Encryption (and More).
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#public-key-function-private-hidden-vector-encryption-and-more)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#public-key-function-private-hidden-vector-encryption-and-more)
### Authors
* James Bartusek, UC Berkeley, Berkeley, USA
* Brent Carmer, Galois, Portland, USA
* Alex J. Malozemoff, Galois, Portland, USA
* Abhishek Jain, Johns Hopkins University, Baltimore, USA
* Zhengzhong Jin, Johns Hopkins University, Baltimore, USA
* Tancrède Lepoint, Google, Mountain View, USA
* Mariana Raykova, Google, Mountain View, USA
* Fermi Ma, Princeton University, Princeton, USA
* Tal Malkin, Columbia University, New York, USA
### Abstract
> We construct public-key function-private predicate encryption for the “small superset functionality,” recently introduced by Beullens and Wee (PKC 2019). This functionality captures several important classes of predicates:
> 
> Point functions. For point function predicates, our construction is equivalent to public-key function-private anonymous identity-based encryption.
> 
> Conjunctions. If the predicate computes a conjunction, our construction is a public-key function-private hidden vector encryption scheme. This addresses an open problem posed by Boneh, Raghunathan, and Segev (ASIACRYPT 2013).
> 
> d-CNFs and read-once conjunctions of d-disjunctions for constant-size d.
> 
> Our construction extends the group-based obfuscation schemes of Bishop et al. (CRYPTO 2018), Beullens and Wee (PKC 2019), and Bartusek et al. (EUROCRYPT 2019) to the setting of public-key function-private predicate encryption. We achieve an average-case notion of function privacy, which guarantees that a decryption key \(\mathsf {sk} _f\) reveals nothing about f as long as f is drawn from a distribution with sufficient entropy. We formalize this security notion as a generalization of the (enhanced) real-or-random function privacy definition of Boneh, Raghunathan, and Segev (CRYPTO 2013). Our construction relies on bilinear groups, and we prove security in the generic bilinear group model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_17](https://doi.org/10.1007/978-3-030-34618-8_17)
## Multi-Client Functional Encryption for Linear Functions in the Standard Model from LWE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#multi-client-functional-encryption-for-linear-functions-in-the-standard-model-from-lwe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#multi-client-functional-encryption-for-linear-functions-in-the-standard-model-from-lwe)
### Authors
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
* Radu Ţiţiu, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
* Radu Ţiţiu, Bitdefender, Bucharest, Romania
### Abstract
> Multi-client functional encryption (MCFE) allows \(\ell \) clients to encrypt ciphertexts \((\mathbf {C}_{t,1},\mathbf {C}_{t,2},\ldots ,\mathbf {C}_{t,\ell })\) under some label. Each client can encrypt his own data \(X_i\) for a label t using a private encryption key \(\mathsf {ek}_i\) issued by a trusted authority in such a way that, as long as all \(\mathbf {C}_{t,i}\) share the same label t, an evaluator endowed with a functional key \(\mathsf {dk}_f\) can evaluate \(f(X_1,X_2,\ldots ,X_\ell )\) without learning anything else on the underlying plaintexts \(X_i\). Functional decryption keys can be derived by the central authority using the master secret key. Under the Decision Diffie-Hellman assumption, Chotard et al. (Asiacrypt 2018) recently described an adaptively secure MCFE scheme for the evaluation of linear functions over the integers. They also gave a decentralized variant (DMCFE) of their scheme which does not rely on a centralized authority, but rather allows encryptors to issue functional secret keys in a distributed manner. While efficient, their constructions both rely on random oracles in their security analysis. In this paper, we build a standard-model MCFE scheme for the same functionality and prove it fully secure under adaptive corruptions. Our proof relies on the Learning-With-Errors (\(\mathsf {LWE}\)) assumption and does not require the random oracle model. We also provide a decentralized variant of our scheme, which we prove secure in the static corruption setting (but for adaptively chosen messages) under the \(\mathsf {LWE}\) assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_18](https://doi.org/10.1007/978-3-030-34618-8_18)
## From Single-Input to Multi-client Inner-Product Functional Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#from-single-input-to-multi-client-inner-product-functional-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#from-single-input-to-multi-client-inner-product-functional-encryption)
### Authors
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Michel Abdalla, INRIA, Paris, France
* Fabrice Benhamouda, Algorand Foundation, New York, NY, USA
* Romain Gay, University of California, Berkeley, CA, USA
### Abstract
> We present a new generic construction of multi-client functional encryption (MCFE) for inner products from single-input functional inner-product encryption and standard pseudorandom functions. In spite of its simplicity, the new construction supports labels, achieves security in the standard model under adaptive corruptions, and can be instantiated from the plain DDH, LWE, and Paillier assumptions. Prior to our work, the only known constructions required discrete-log-based assumptions and the random-oracle model. Since our new scheme is not compatible with the compiler from Abdalla et al. (PKC 2019) that decentralizes the generation of the functional decryption keys, we also show how to modify the latter transformation to obtain a decentralized version of our scheme with similar features.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_19](https://doi.org/10.1007/978-3-030-34618-8_19)
## Rate-1 Trapdoor Functions from the Diffie-Hellman Problem.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#rate-1-trapdoor-functions-from-the-diffie-hellman-problem)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#rate-1-trapdoor-functions-from-the-diffie-hellman-problem)
### Authors
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, University of California, Berkeley, USA
* Mohammad Hajiabadi, University of California, Berkeley, USA
* Kevin Liu, University of California, Berkeley, USA
* Giulio Malavolta, Simons Institute for the Theory of Computing, Berkeley, USA
### Abstract
> Trapdoor functions (TDFs) are one of the fundamental building blocks in cryptography. Studying the underlying assumptions and the efficiency of the resulting instantiations is therefore of both theoretical and practical interest. In this work we improve the input-to-image rate of TDFs based on the Diffie-Hellman problem. Specifically, we present:
> 
> (a) A rate-1 TDF from the computational Diffie-Hellman (CDH) assumption, improving the result of Garg, Gay, and Hajiabadi [EUROCRYPT 2019], which achieved linear-size outputs but with large constants. Our techniques combine non-binary alphabets and high-rate error-correcting codes over large fields.
> 
> (b) A rate-1 deterministic public-key encryption satisfying block-source security from the decisional Diffie-Hellman (DDH) assumption. While this question was recently settled by Döttling et al. [CRYPTO 2019], our scheme is conceptually simpler and concretely more efficient. We demonstrate this fact by implementing our construction.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_20](https://doi.org/10.1007/978-3-030-34618-8_20)
## The Local Forking Lemma and Its Application to Deterministic Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#the-local-forking-lemma-and-its-application-to-deterministic-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#the-local-forking-lemma-and-its-application-to-deterministic-encryption)
### Authors
* Mihir Bellare, University of California San Diego, La Jolla, USA
* Wei Dai, University of California San Diego, La Jolla, USA
* Lucy Li, Cornell University, Ithaca, USA
### Abstract
> We bypass impossibility results for the deterministic encryption of public-key-dependent messages, showing that, in this setting, the classical Encrypt-with-Hash scheme provides message-recovery security, across a broad range of message distributions. The proof relies on a new variant of the forking lemma in which the random oracle is reprogrammed on just a single fork point rather than on all points past the fork.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_21](https://doi.org/10.1007/978-3-030-34618-8_21)
## Fine-Grained Cryptography Revisited.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#fine-grained-cryptography-revisited)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#fine-grained-cryptography-revisited)
### Authors
* Shohei Egashira, Tokyo Institute of Technology, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
### Abstract
> Fine-grained cryptographic primitives are secure against adversaries with bounded resources and can be computed by honest users with less resources than the adversaries. In this paper, we revisit the results by Degwekar, Vaikuntanathan, and Vasudevan in Crypto 2016 on fine-grained cryptography and show the constructions of three key fundamental fine-grained cryptographic primitives: one-way permutations, hash proof systems (which in turn implies a public-key encryption scheme against chosen chiphertext attacks), and trapdoor one-way functions. All of our constructions are computable in \(\mathsf {NC^1}\) and secure against (non-uniform) \(\mathsf {NC^1}\) circuits under the widely believed worst-case assumption \(\mathsf {NC^1}\subsetneq \mathsf{\oplus L/poly}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_22](https://doi.org/10.1007/978-3-030-34618-8_22)
## Shorter QA-NIZK and SPS with Tighter Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#shorter-qa-nizk-and-sps-with-tighter-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#shorter-qa-nizk-and-sps-with-tighter-security)
### Authors
* Masayuki Abe, NTT Corporation, Tokyo, Japan
* Charanjit S. Jutla, IBM T. J. Watson Research Center, Yorktown Heights, USA
* Miyako Ohkubo, Security Fundamentals Laboratories, CSR, NICT, Tokyo, Japan
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Arnab Roy, Fujitsu Laboratories of America, Sunnyvale, USA
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
### Abstract
> Quasi-adaptive non-interactive zero-knowledge proof (QA-NIZK) systems and structure-preserving signature (SPS) schemes are two powerful tools for constructing practical pairing-based cryptographic schemes. Their efficiency directly affects the efficiency of the derived advanced protocols.
> 
> We construct more efficient QA-NIZK and SPS schemes with tight security reductions. Our QA-NIZK scheme is the first one that achieves both tight simulation soundness and constant proof size (in terms of number of group elements) at the same time, while the recent scheme from Abe et al. (ASIACRYPT 2018) achieved tight security with proof size linearly depending on the size of the language and the witness. Assuming the hardness of the Symmetric eXternal Diffie-Hellman (SXDH) problem, our scheme contains only 14 elements in the proof and remains independent of the size of the language and the witness. Moreover, our scheme has tighter simulation soundness than the previous schemes.
> 
> Technically, we refine and extend a partitioning technique from a recent SPS scheme (Gay et al., EUROCRYPT 2018). Furthermore, we improve the efficiency of the tightly secure SPS schemes by using a relaxation of NIZK proof system for OR languages, called designated-prover NIZK system. Under the SXDH assumption, our SPS scheme contains 11 group elements in the signature, which is shortest among the tight schemes and is the same as an early non-tight scheme (Abe et al., ASIACRYPT 2012). Compared to the shortest known non-tight scheme (Jutla and Roy, PKC 2017), our scheme achieves tight security at the cost of 5 additional elements.
> 
> All the schemes in this paper are proven secure based on the Matrix Diffie-Hellman assumptions (Escala et al., CRYPTO 2013). These are a class of assumptions which include the well-known SXDH and DLIN assumptions and provide clean algebraic insights to our constructions. To the best of our knowledge, our schemes achieve the best efficiency among schemes with the same functionality and security properties. This naturally leads to improvement of the efficiency of cryptosystems based on simulation-sound QA-NIZK and SPS.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_23](https://doi.org/10.1007/978-3-030-34618-8_23)
## Efficient Noninteractive Certification of RSA Moduli and Beyond.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#efficient-noninteractive-certification-of-rsa-moduli-and-beyond)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#efficient-noninteractive-certification-of-rsa-moduli-and-beyond)
### Authors
* Sharon Goldberg, Boston University, Boston, MA, USA
* Leonid Reyzin, Boston University, Boston, MA, USA
* Omar Sagga, Boston University, Boston, MA, USA
* Foteini Baldimtsi, George Mason University, Fairfax, VA, USA
### Abstract
> In many applications, it is important to verify that an RSA public key (N, e) specifies a permutation over the entire space \(\mathbb {Z}_N\), in order to prevent attacks due to adversarially-generated public keys. We design and implement a simple and efficient noninteractive zero-knowledge protocol (in the random oracle model) for this task. Applications concerned about adversarial key generation can just append our proof to the RSA public key without any other modifications to existing code or cryptographic libraries. Users need only perform a one-time verification of the proof to ensure that raising to the power e is a permutation of the integers modulo N. For typical parameter settings, the proof consists of nine integers modulo N; generating the proof and verifying it both require about nine modular exponentiations.
> 
> We extend our results beyond RSA keys and also provide efficient noninteractive zero-knowledge proofs for other properties of N, which can be used to certify that N is suitable for the Paillier cryptosystem, is a product of two primes, or is a Blum integer. As compared to the recent work of Auerbach and Poettering (PKC 2018), who provide two-message protocols for similar languages, our protocols are more efficient and do not require interaction, which enables a broader class of applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_24](https://doi.org/10.1007/978-3-030-34618-8_24)
## Shorter Pairing-Based Arguments Under Standard Assumptions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2019-3].md#shorter-pairing-based-arguments-under-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2019-3].md#shorter-pairing-based-arguments-under-standard-assumptions)
### Authors
* Alonso González, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
* Carla Ràfols, Universitat Pompeu Fabra and Cybercat, Barcelona, Spain
### Abstract
> This paper constructs efficient non-interactive arguments for correct evaluation of arithmetic and boolean circuits with proof size O(d) group elements, where d is the multiplicative depth of the circuit, under falsifiable assumptions. This is achieved by combining techniques from SNARKs and QA-NIZK arguments of membership in linear spaces. The first construction is very efficient (the proof size is \(\approx 4d\) group elements and the verification cost is \(\approx 4d\) pairings and \(O(n+n'+d)\) exponentiations, where n is the size of the input and \(n'\) of the output) but one type of attack can only be ruled out assuming the knowledge soundness of QA-NIZK arguments of membership in linear spaces. We give an alternative construction which replaces this assumption with a decisional assumption in bilinear groups at the cost of approximately doubling the proof size. The construction for boolean circuits can be made zero-knowledge with Groth-Sahai proofs, resulting in a NIZK argument for circuit satisfiability based on falsifiable assumptions in bilinear groups of proof size \(O(n+d)\).
> 
> Our main technical tool is what we call an “argument of knowledge transfer”. Given a commitment \(C_1\) and an opening x, such an argument allows to prove that some other commitment \(C_2\) opens to f(x), for some function f, even if \(C_2\) is not extractable. We construct very short, constant-size, pairing-based arguments of knowledge transfer with constant-time verification for any linear function and also for Hadamard products. These allow to transfer the knowledge of the input to lower levels of the circuit.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-34618-8_25](https://doi.org/10.1007/978-3-030-34618-8_25)
