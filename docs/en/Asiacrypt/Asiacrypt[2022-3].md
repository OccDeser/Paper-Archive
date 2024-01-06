# Asiacrypt[2022-3]
## New Algorithms and Analyses for Sum-Preserving Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#new-algorithms-and-analyses-for-sum-preserving-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#new-algorithms-and-analyses-for-sum-preserving-encryption)
### Authors
* Sarah Miracle, University of St. Thomas, St. Paul, USA
* Scott Yilek, University of St. Thomas, St. Paul, USA
### Abstract
> We continue the study of sum-preserving encryption schemes, in which the plaintext and ciphertext are both integer vectors with the same sum. Such encryption schemes were recently constructed and analyzed by Tajik, Gunasekaran, Dutta, Ellia, Bobba, Rosulek, Wright, and Feng (NDSS 2019) in the context of image encryption. Our first main result is to prove a mixing-time bound for the construction given by Tajik et al. using path coupling. We then provide new sum-preserving encryption schemes by describing two practical ways to rank and unrank the values involved in sum-preserving encryption, which can then be combined with the rank-encipher-unrank technique from format-preserving encryption. Finally, we compare the efficiency of the Tajik et al. construction and our new ranking constructions based on performance tests we conducted on prototype implementations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_1](https://doi.org/10.1007/978-3-031-22969-5_1)
## Towards Case-Optimized Hybrid Homomorphic Encryption - Featuring the Elisabeth Stream Cipher.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#towards-case-optimized-hybrid-homomorphic-encryption-featuring-the-elisabeth-stream-cipher)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#towards-case-optimized-hybrid-homomorphic-encryption-featuring-the-elisabeth-stream-cipher)
### Authors
* Orel Cosseron, INRIA Lyon, Lyon, France
* Orel Cosseron, ENS de Lyon, LIP, Lyon, France
* Orel Cosseron, LTCI, Telecom Paris, Institut Polytechnique de Paris, Paris, France
* Clément Hoffmann, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, UCLouvain, ICTEAM/ELEN/Crypto Group, Louvain-la-Neuve, Belgium
* Pierrick Méaux, Luxembourg University, SnT, Luxembourg, Luxembourg
### Abstract
> Hybrid Homomorphic Encryption (HHE) reduces the amount of computation client-side and bandwidth usage in a Fully Homomorphic Encryption (FHE) framework. HHE requires the usage of specific symmetric schemes that can be evaluated homomorphically efficiently. In this paper, we introduce the paradigm of Group Filter Permutator (GFP) as a generalization of the Improved Filter Permutator paradigm introduced by Méaux et al.. From this paradigm, we specify Elisabeth , a family of stream cipher and give an instance: Elisabeth-4 . After asserting the security of this scheme, we provide a Rust implementation of it and ensure its performance is comparable to state-of-the-art HHE. The true strength of Elisabeth lies in the available operations server-side: while the best HHE applications were limited to a few multiplications server-side, we used data sent through Elisabeth-4 to homomorphically evaluate a neural network inference. Finally, we discuss the improvement and loss between the HHE and the FHE framework and give ideas to build more efficient schemes from the Elisabeth family.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_2](https://doi.org/10.1007/978-3-031-22969-5_2)
## Revisiting Related-Key Boomerang Attacks on AES Using Computer-Aided Tool.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#revisiting-related-key-boomerang-attacks-on-aes-using-computer-aided-tool)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#revisiting-related-key-boomerang-attacks-on-aes-using-computer-aided-tool)
### Authors
* Patrick Derbez, Univ Rennes, CNRS, IRISA, Rennes, France
* Marie Euler, Univ Rennes, CNRS, IRISA, Rennes, France
* Pierre-Alain Fouque, Univ Rennes, CNRS, IRISA, Rennes, France
* Phuong Hoa Nguyen, Univ Rennes, CNRS, IRISA, Rennes, France
* Marie Euler, Direction Générale de l’Armement, Rennes, France
### Abstract
> In recent years, several MILP models were introduced to search automatically for boomerang distinguishers and boomerang attacks on block ciphers. However, they can only be used when the key schedule is linear. Here, a new model is introduced to deal with nonlinear key schedules as it is the case for AES. This model is more complex and actually it is too slow for exhaustive search. However, when some hints are added to the solver, it found the current best related-key boomerang attack on AES-192 with \(2^{124}\) time, \(2^{124}\) data, and \(2^{79.8}\) memory complexities, which is better than the one presented by Biryukov and Khovratovich at ASIACRYPT 2009 with complexities \(2^{176}/2^{123}/2^{152}\) respectively. This represents a huge improvement for the time and memory complexity, illustrating the power of MILP in cryptanalysis.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_3](https://doi.org/10.1007/978-3-031-22969-5_3)
## On Secure Ratcheting with Immediate Decryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#on-secure-ratcheting-with-immediate-decryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#on-secure-ratcheting-with-immediate-decryption)
### Authors
* Jeroen Pijnenburg, Royal Holloway, University of London, Egham Hill, Egham, Surrey, UK
* Bertram Poettering, IBM Research Europe – Zurich, Säumerstr 4, 8803, Rüschlikon, Switzerland
### Abstract
> Ratcheting protocols let parties securely exchange messages in environments in which state exposure attacks are anticipated. While, unavoidably, some promises on confidentiality and authenticity cannot be upheld once the adversary obtains a copy of a party’s state, ratcheting protocols aim at confining the impact of state exposures as much as possible. In particular, such protocols provide forward security (after state exposure, past messages remain secure) and post-compromise security (after state exposure, participants auto-heal and regain security).
> 
> Ratcheting protocols serve as core components in most modern instant messaging apps, with billions of users per day. Most instances, including Signal, guarantee immediate decryption (ID): Receivers recover and deliver the messages wrapped in ciphertexts immediately when they become available, even if ciphertexts arrive out-of-order and preceding ciphertexts are still missing. This ensures the continuation of sessions in unreliable communication networks, ultimately contributing to a satisfactory user experience. While initial academic treatments consider ratcheting protocols without ID, Alwen et al. (EC’19) propose the first ID-aware security model, together with a provably secure construction. Unfortunately, as we note, in their protocol a receiver state exposure allows for the decryption of all prior undelivered ciphertexts. As a consequence, from an adversary’s point of view, intentionally preventing the delivery of a fraction of the ciphertexts of a conversation, and corrupting the receiver (days) later, allows for correctly decrypting all suppressed ciphertexts. The same attack works against Signal.
> 
> We argue that the level of (forward-)security realized by the protocol of Alwen et al., and mandated by their security model, is considerably lower than both intuitively expected and technically possible. The main contributions of our work are thus a careful revisit of the security notions for ratcheted communication in the ID setting, together with a provably secure proof-of-concept construction. One novel component of our model is that it reflects the progression of physical time. This allows for formally requiring that (undelivered) ciphertexts automatically expire after a configurable amount of time.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_4](https://doi.org/10.1007/978-3-031-22969-5_4)
## Strongly Anonymous Ratcheted Key Exchange.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#strongly-anonymous-ratcheted-key-exchange)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#strongly-anonymous-ratcheted-key-exchange)
### Authors
* Benjamin Dowling, University of Sheffield, Sheffield, UK
* Eduard Hauck, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
* Paul Rösler, New York University, New York, USA
### Abstract
> Anonymity is an (abstract) security goal that is especially important to threatened user groups. Therefore, widely deployed communication protocols implement various measures to hide different types of information (i.e., metadata) about their users. Before actually defining anonymity, we consider an attack vector about which targeted user groups can feel concerned: continuous, temporary exposure of their secrets. Examples for this attack vector include intentionally planted viruses on victims’ devices, as well as physical access when their users are detained.
> 
> Inspired by Signal’s Double-Ratchet Algorithm, Ratcheted (or Continuous) Key Exchange (RKE) is a novel class of protocols that increase confidentiality and authenticity guarantees against temporary exposure of user secrets. For this, an RKE regularly renews user secrets such that the damage due to past and future exposures is minimized; this is called Post-Compromise Security and Forward-Secrecy, respectively.
> 
> With this work, we are the first to leverage the strength of RKE for achieving strong anonymity guarantees under temporary exposure of user secrets. We extend existing definitions for RKE to capture attacks that interrelate ciphertexts, seen on the network, with secrets, exposed from users’ devices. Although, at first glance, strong authenticity (and confidentiality) conflicts with strong anonymity, our anonymity definition is as strong as possible without diminishing other goals.
> 
> We build strongly anonymity-, authenticity-, and confidentiality-preserving RKE and, along the way, develop new tools with applicability beyond our specific use-case: Updatable and Randomizable Signatures as well as Updatable and Randomizable Public Key Encryption. For both new primitives, we build efficient constructions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_5](https://doi.org/10.1007/978-3-031-22969-5_5)
## Encryption to the Future - A Paradigm for Sending Secret Messages to Future (Anonymous) Committees.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#encryption-to-the-future-a-paradigm-for-sending-secret-messages-to-future-anonymous-committees)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#encryption-to-the-future-a-paradigm-for-sending-secret-messages-to-future-anonymous-committees)
### Authors
* Matteo Campanelli, Protocol Labs, San Francisco, USA
* Hamidreza Khoshakhlagh, Aarhus University, Aarhus, Denmark
* Jesper Buus Nielsen, Aarhus University, Aarhus, Denmark
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Anders Konring, IT University of Copenhagen, Copenhagen, Denmark
### Abstract
> A number of recent works have constructed cryptographic protocols with flavors of adaptive security by having a randomly-chosen anonymous committee run at each round. Since most of these protocols are stateful, transferring secret states from past committees to future, but still unknown, committees is a crucial challenge. Previous works have tackled this problem with approaches tailor-made for their specific setting, which mostly rely on using a blockchain to orchestrate auxiliary committees that aid in the state hand-over process. In this work, we look at this challenge as an important problem on its own and initiate the study of Encryption to the Future (EtF) as a cryptographic primitive. First, we define a notion of an EtF scheme where time is determined with respect to an underlying blockchain and a lottery selects parties to receive a secret message at some point in the future. While this notion seems overly restrictive, we establish two important facts: 1. if used to encrypt towards parties selected in the “far future”, EtF implies witness encryption for NP over a blockchain; 2. if used to encrypt only towards parties selected in the “near future”, EtF is not only sufficient for transferring state among committees as required by previous works, but also captures previous tailor-made solutions. To corroborate these results, we provide a novel construction of EtF based on witness encryption over commitments (cWE), which we instantiate from a number of standard assumptions via a construction based on generic cryptographic primitives. Finally, we show how to use “near future” EtF to obtain “far future” EtF with a protocol based on an auxiliary committee whose communication complexity is independent of the length of plaintext messages being sent to the future.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_6](https://doi.org/10.1007/978-3-031-22969-5_6)
## Authenticated Encryption with Key Identification.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#authenticated-encryption-with-key-identification)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#authenticated-encryption-with-key-identification)
### Authors
* Julia Len, Cornell Tech, New York, USA
* Thomas Ristenpart, Cornell Tech, New York, USA
* Paul Grubbs, University of Michigan, Ann Arbor, USA
### Abstract
> Authenticated encryption with associated data (AEAD) forms the core of much of symmetric cryptography, yet the standard techniques for modeling AEAD assume recipients have no ambiguity about what secret key to use for decryption. This is divorced from what occurs in practice, such as in key management services, where a message recipient can store numerous keys and must identify the correct key before decrypting. To date there has been no formal investigation of their security properties or efficacy, and the ad hoc solutions for identifying the intended key deployed in practice can be inefficient and, in some cases, vulnerable to practical attacks.
> 
> We provide the first formalization of nonce-based AEAD that supports key identification (AEAD-KI). Decryption now takes in a vector of secret keys and a ciphertext and must both identify the correct secret key and decrypt the ciphertext. We provide new formal security definitions, including new key robustness definitions and indistinguishability security notions. Finally, we show several different approaches for AEAD-KI and prove their security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_7](https://doi.org/10.1007/978-3-031-22969-5_7)
## Privacy-Preserving Authenticated Key Exchange in the Standard Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#privacy-preserving-authenticated-key-exchange-in-the-standard-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#privacy-preserving-authenticated-key-exchange-in-the-standard-model)
### Authors
* You Lyu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Dawu Gu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* You Lyu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shengli Liu, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Shuai Han, School of Cyber Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Shengli Liu, Westone Cryptologic Research Center, Beijing, 100070, China
### Abstract
> Privacy-Preserving Authenticated Key Exchange (PPAKE) provides protection both for the session keys and the identity information of the involved parties. In this paper, we introduce the concept of robustness into PPAKE. Robustness enables each user to confirm whether itself is the target recipient of the first round message in the protocol. With the help of robustness, a PPAKE protocol can successfully avoid the heavy redundant communications and computations caused by the ambiguity of communicants in the existing PPAKE, especially in broadcast channels.
> 
> We propose a generic construction of robust PPAKE from key encapsulation mechanism (\(\textsf{KEM}\)), digital signature (\(\textsf{SIG}\)), message authentication code (\(\textsf{MAC}\)), pseudo-random generator (\(\textsf{PRG}\)) and symmetric encryption (\(\textsf{SE}\)). By instantiating \(\textsf{KEM},\textsf{MAC},\textsf{PRG}\) from the DDH assumption and \(\textsf{SIG}\) from the CDH assumption, we obtain a specific robust PPAKE scheme in the standard model, which enjoys forward security for session keys, explicit authentication and forward privacy for user identities. Thanks to the robustness of our PPAKE, the number of broadcast messages per run and the computational complexity per user are constant, and in particular, independent of the number of users in the system.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_8](https://doi.org/10.1007/978-3-031-22969-5_8)
## On the Field-Based Division Property: Applications to MiMC, Feistel MiMC and GMiMC.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#on-the-field-based-division-property-applications-to-mimc-feistel-mimc-and-gmimc)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#on-the-field-based-division-property-applications-to-mimc-feistel-mimc-and-gmimc)
### Authors
* Jiamin Cui, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Puwen Wei, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jiamin Cui, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Puwen Wei, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
### Abstract
> Recent practical applications using advanced cryptographic protocols such as multi-party computations (MPC) and zero-knowledge proofs (ZKP) have prompted a range of novel symmetric primitives described over large finite fields, characterized as arithmetization-oriented (AO) ciphers. Such designs, aiming to minimize the number of multiplications over fields, have a high risk of being vulnerable to algebraic attacks, especially to the higher-order differential attack. Thus, it is significant to carefully evaluate the growth of their algebraic degree. However, the degree estimation for AO ciphers has been a challenge for cryptanalysts due to the lack of general and accurate methods.
> 
> In this paper, we extend the division property, a state-of-the-art framework for finding the upper bound of the algebraic degree over binary fields, to the scope of \(\mathbb {F}_{2^n}\). It is a generic method to detect the algebraic degree for AO ciphers, even applicable to Feistel ciphers which have no better bounds than the trivial exponential one. In this general division property, our idea is to evaluate whether the polynomial representation of a block cipher contains some specific monomials. With a deep investigation of the arithmetical feature, we introduce the propagation rules of monomials for field-based operations, which can be efficiently modeled using the bit-vector theory of SMT. Then the new searching tool for degree estimation can be constructed due to the relationship between the algebraic degree and the exponents of monomials.
> 
> We apply our new framework to some important AO ciphers, including Feistel MiMC, GMiMC, and MiMC. For Feistel MiMC, we show that the algebraic degree grows significantly slower than the native exponential bound. For the first time, we present a secret-key higher-order differential distinguisher for up to 124 rounds, much better than the 83-round distinguisher for Feistel MiMC permutation proposed at CRYPTO 2020. We also exhibit a full-round zero-sum distinguisher with a data complexity of \(2^{251}\). Our method can be further extended for the general Feistel structure with more branches and exhibit higher-order differential distinguishers against the practical instance of GMiMC for up to 50 rounds. For MiMC in SP-networks, our results correspond to the exact algebraic degree proved by Bouvier et al. We also point out that the number of rounds in MiMC’s specification is not sufficient to guarantee the security against the higher-order differential attack for MiMC-like schemes with different exponents. The investigation of different exponents provides some guidance on the cipher design.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_9](https://doi.org/10.1007/978-3-031-22969-5_9)
## Traceable Receipt-Free Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#traceable-receipt-free-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#traceable-receipt-free-encryption)
### Authors
* Henri Devillez, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
* Olivier Pereira, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
* Thomas Peters, UCLouvain – ICTEAM – Crypto Group, 1348, Louvain-la-Neuve, Belgium
### Abstract
> CCA-like game-based security definitions capture confidentiality by asking an adversary to distinguish between honestly computed encryptions of chosen plaintexts. In the context of voting systems, such guarantees have been shown to be sufficient to prove ballot privacy (Asiacrypt’12). In this paper, we observe that they fall short when one seeks to obtain receipt-freeness, that is, when corrupted voters who submit chosen ciphertexts encrypting their vote must be prevented from proving how they voted to a third party.
> 
> Since no known encryption security notion can lead to a receipt-free ballot submission process, we address this challenge by proposing a novel publicly verifiable encryption primitive coined Traceable Receipt-free Encryption (TREnc) and a new notion of traceable CCA security filling the definitional gap underlined above.
> 
> We propose two TREnc instances, one generic achieving stronger guarantees for the purpose of relating it to existing building blocks, and a dedicated one based on SXDH. Both support the encryption of group elements in the standard model, while previously proposed encryption schemes aiming at offering receipt-freeness only support a polynomial-size message space, or security in the generic group model.
> 
> Eventually, we demonstrate how a TREnc can be used to build receipt-free protocols, by following a standard blueprint.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_10](https://doi.org/10.1007/978-3-031-22969-5_10)
## Efficient Searchable Symmetric Encryption for Join Queries.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#efficient-searchable-symmetric-encryption-for-join-queries)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#efficient-searchable-symmetric-encryption-for-join-queries)
### Authors
* Charanjit Jutla, IBM Research, New York, USA
* Sikhar Patranabis, IBM Research, Bangalore, India
### Abstract
> The Oblivious Cross-Tags (OXT) protocol due to Cash et al. (CRYPTO’13) is a highly scalable searchable symmetric encryption (SSE) scheme that allows fast processing of conjunctive and more general Boolean queries over encrypted relational databases. A longstanding open question has been to extend OXT to also support queries over joins of tables without pre-computing the joins. In this paper, we solve this open question without compromising on the nice properties of OXT with respect to both security and efficiency. We propose Join Cross-Tags (JXT) - a purely symmetric-key solution that supports efficient conjunctive queries over (equi-) joins of encrypted tables without any pre-computation at setup. The JXT scheme is fully compatible with OXT, and can be used in conjunction with OXT to support a wide class of SQL queries directly over encrypted relational databases. JXT incurs a storage cost (over OXT) of a factor equal to the number of potential join-attributes in a table, which is usually compensated by the fact that JXT is a fully symmetric-key solution (as opposed to OXT which relies on discrete-log hard groups). We prove the (adaptive) simulation-based security of JXT with respect to a rigorously defined leakage profile.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_11](https://doi.org/10.1007/978-3-031-22969-5_11)
## Knowledge Encryption and Its Applications to Simulatable Protocols with Low Round-Complexity.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#knowledge-encryption-and-its-applications-to-simulatable-protocols-with-low-round-complexity)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#knowledge-encryption-and-its-applications-to-simulatable-protocols-with-low-round-complexity)
### Authors
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> We introduce a new notion of public key encryption, knowledge encryption, for which its ciphertexts can be reduced to the public-key, i.e., any algorithm that can break the ciphertext indistinguishability can be used to extract the (partial) secret key. We show that knowledge encryption can be built solely on any two-round oblivious transfer with game-based security, which are known based on various standard (polynomial-hardness) assumptions, such as the DDH, the Quadratic(\(N^{th}\)) Residuosity or the LWE assumption.
> 
> We use knowledge encryption to construct the first three-round (weakly) simulatable oblivious transfer. This protocol satisfies (fully) simulatable security for the receiver, and weakly simulatable security (\((T,\epsilon )\)-simulatability) for the sender in the following sense: for any polynomial T and any inverse polynomial \(\epsilon \), there exists an efficient simulator such that the distinguishing gap of any distinguisher of size less than T is at most \(\epsilon \).
> 
> Equipped with these tools, we construct a variety of fundamental cryptographic protocols with low round-complexity, assuming only the existence of two-round oblivious transfer with game-based security. These protocols include three-round delayed-input weak zero knowledge argument, three-round weakly secure two-party computation, three-round concurrent weak zero knowledge in the BPK model, and a two-round commitment with weak security under selective opening attack. These results improve upon the assumptions required by the previous constructions. Furthermore, all our protocols enjoy the above \((T,\epsilon )\)-simulatability (stronger than the distinguisher-dependent simulatability), and are quasi-polynomial time simulatable under the same (polynomial hardness) assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_12](https://doi.org/10.1007/978-3-031-22969-5_12)
## Compact and Tightly Selective-Opening Secure Public-key Encryption Schemes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#compact-and-tightly-selective-opening-secure-public-key-encryption-schemes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#compact-and-tightly-selective-opening-secure-public-key-encryption-schemes)
### Authors
* Jiaxin Pan, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
* Runzhi Zeng, Department of Mathematical Sciences, NTNU – Norwegian University of Science and Technology, Trondheim, Norway
### Abstract
> We propose four public-key encryption schemes with tight simulation-based selective-opening security against chosen-ciphertext attacks (SIM-SO-CCA) in the random oracle model. Our schemes only consist of small constant amounts of group elements in the ciphertext, ignoring smaller contributions from symmetric-key encryption, namely, they have compact ciphertexts. Furthermore, three of our schemes have compact public keys as well.
> 
> Known (almost) tightly SIM-SO-CCA secure PKE schemes are due to the work of Lyu et al. (PKC 2018) and Libert et al. (Crypto 2017). They have either linear-size ciphertexts or linear-size public keys. Moreover, they only achieve almost tightness, namely, with security loss depending on the security parameters.
> 
> Different to them, our schemes are the first ones achieving both tight SIM-SO-CCA security and compactness. Our schemes can be divided into two families:
> 
> Direct Constructions. Our first three schemes are constructed directly based on the Strong Diffie-Hellman (StDH), Computational DH (CDH), and Decisional DH assumptions. Both their ciphertexts and public keys are compact. Their security loss is a small constant. Interestingly, our CDH-based construction is the first scheme achieving all these advantages based on a weak, search assumption.
> 
> A Generic Construction. Our last scheme is the well-known Fujisaki-Okamoto transformation. We show that it can turn a lossy encryption scheme into a tightly SIM-SO-CCA secure PKE. This transformation preserves both tightness and compactness of the underlying lossy encryption, which is in contrast to the non-tight proof of Heuer et al. (PKC 2015).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_13](https://doi.org/10.1007/978-3-031-22969-5_13)
## Identity-Based Matchmaking Encryption from Standard Assumptions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#identity-based-matchmaking-encryption-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#identity-based-matchmaking-encryption-from-standard-assumptions)
### Authors
* Jie Chen, Shanghai Key Laboratory of Trustworthy Computing,  Software Engineering Institute, East China Normal University, Shanghai, 200062, China
* Yu Li, Shanghai Key Laboratory of Trustworthy Computing,  Software Engineering Institute, East China Normal University, Shanghai, 200062, China
* Jinming Wen, College of Information Science and Technology and the College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Jian Weng, College of Information Science and Technology and the College of Cyber Security, Jinan University, Guangzhou, 510632, China
* Jinming Wen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### Abstract
> In this work, we propose the first identity-based matchmaking encryption (IB-ME) scheme under the standard assumptions in the standard model. This scheme is proven to be secure under the symmetric external Diffie-Hellman (SXDH) assumption in prime order bilinear pairing groups. In our IB-ME scheme, all parameters have constant number of group elements and are simpler than those of previous constructions. Previous works are either in the random oracle model or based on the q-type assumptions, while ours is built directly in the standard model and based on static assumptions, and does not rely on other crypto tools.
> 
> More concretely, our IB-ME scheme is constructed from a variant of two-level anonymous IBE. We observed that this two-level IBE with anonymity and unforgeability satisfies the same functionality of IB-ME, and its security properties cleverly meet the two requirements of IB-ME (Privacy and Authenticity). The privacy property of IB-ME relies on the anonymity of this two-level IBE, while the authenticity property is corresponding to the unforgeability in the 2nd level. This variant of two-level IBE is built from dual pairing vector spaces, and both security reductions rely on dual system encryption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_14](https://doi.org/10.1007/978-3-031-22969-5_14)
## Anonymous Public Key Encryption Under Corruptions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#anonymous-public-key-encryption-under-corruptions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#anonymous-public-key-encryption-under-corruptions)
### Authors
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Shuai Han, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, Shanghai, China
* Lin Lyu, Bergische Universität Wuppertal, Wuppertal, Germany
### Abstract
> Anonymity of public key encryption (PKE) requires that, in a multi-user scenario, the PKE ciphertexts do not leak information about which public keys are used to generate them. Corruptions are common threats in the multi-user scenario but anonymity of PKE under corruptions is less studied in the literature. In TCC 2020, Benhamouda et al. first provide a formal characterization for anonymity of PKE under a specific type of corruption. However, no known PKE scheme is proved to meet their characterization.
> 
> To the best of our knowledge, all the PKE application scenarios which require anonymity also require confidentiality. However, in the work by Benhamouda et al., different types of corruptions for anonymity and confidentiality are considered, which can cause security pitfalls. What’s worse, we are not aware of any PKE scheme which can provide both anonymity and confidentiality under the same types of corruptions.
> 
> In this work, we introduce a new security notion for PKE called ANON-RSO\(_{ {k} }\) &C security, capturing anonymity under corruptions. We also introduce SIM-RSO\(_{ {k} }\) &C security which captures confidentiality under the same types of corruptions. We provide a generic framework of constructing PKE scheme which can achieve the above two security goals simultaneously based on a new primitive called key and message non-committing encryption (KM-NCE). Then we give a general construction of KM-NCE utilizing a variant of hash proof system (HPS) called Key-Openable HPS. We also provide Key-Openable HPS instantiations based on the matrix decisional Diffie-Hellman assumption. Therefore, we can obtain various concrete PKE instantiations achieving the two security goals in the standard model with compact ciphertexts. Furthermore, for some PKE instantiation, its security reduction is tight.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_15](https://doi.org/10.1007/978-3-031-22969-5_15)
## Memory-Tight Multi-challenge Security of Public-Key Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#memory-tight-multi-challenge-security-of-public-key-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#memory-tight-multi-challenge-security-of-public-key-encryption)
### Authors
* Joseph Jaeger, School of Cybersecurity and Privacy Georgia Institute of Technology, Atlanta, GA, USA
* Akshaya Kumar, School of Cybersecurity and Privacy Georgia Institute of Technology, Atlanta, GA, USA
### Abstract
> We give the first examples of public-key encryption schemes which can be proven to achieve multi-challenge, multi-user CCA security via reductions that are tight in time, advantage, and memory. Our constructions are obtained by applying the KEM-DEM paradigm to variants of Hashed ElGamal and the Fujisaki-Okamoto transformation that are augmented by adding uniformly random strings to their ciphertexts.
> 
> The reductions carefully combine recent proof techniques introduced by Bhattacharyya’20 and Ghoshal-Ghosal-Jaeger-Tessaro’22. Our proofs for the augmented ECIES version of Hashed-ElGamal make use of a new computational Diffie-Hellman assumption wherein the adversary is given access to a pairing to a random group, which we believe may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_16](https://doi.org/10.1007/978-3-031-22969-5_16)
## Short-lived Zero-Knowledge Proofs and Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#short-lived-zero-knowledge-proofs-and-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#short-lived-zero-knowledge-proofs-and-signatures)
### Authors
* Arasu Arun, New York University, New York, NY, USA
* Joseph Bonneau, New York University, New York, NY, USA
* Joseph Bonneau, University of Melbourne, Melbourne, VIC, Australia
* Jeremy Clark, Concordia University, Montreal, QC, Canada
### Abstract
> We introduce the short-lived proof, a non-interactive proof of knowledge with a novel feature: after a specified period of time, the proof is no longer convincing. This time-delayed loss of soundness happens “naturally” without further involvement from the prover or any third party. We propose definitions for short-lived proofs as well as the special case of short-lived signatures. We show several practical constructions built using verifiable delay functions (VDFs). The key idea in our approach is to allow any party to forge any proof by executing a large sequential computation. Some constructions achieve a stronger property called reusable forgeability in which one sequential computation allows forging an arbitrary number of proofs of different statements. We also introduces two novel types of VDFs, re-randomizable VDFs and zero-knowledge VDFs, which may be of independent interest. Our constructions for short-lived \(\Sigma \)-protocols and signatures are practically efficient for provers and verifiers, adding a few hundred bytes of overhead and tens to hundreds of milliseconds of proving/verification time.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_17](https://doi.org/10.1007/978-3-031-22969-5_17)
## Non-interactive Zero-Knowledge Proofs to Multiple Verifiers.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#non-interactive-zero-knowledge-proofs-to-multiple-verifiers)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#non-interactive-zero-knowledge-proofs-to-multiple-verifiers)
### Authors
* Kang Yang, State Key Laboratory of Cryptology, Beijing, China
* Xiao Wang, Northwestern University, Evanston, USA
### Abstract
> In this paper, we study zero-knowledge (ZK) proofs for circuit satisfiability that can prove to n verifiers at a time efficiently. The proofs are secure against the collusion of a prover and a subset of t verifiers. We refer to such ZK proofs as multi-verifier zero-knowledge (MVZK) proofs and focus on the case that a majority of verifiers are honest (i.e., \(t<n/2\)). We construct efficient MVZK protocols in the random oracle model where the prover sends one message to each verifier, while the verifiers only exchange one round of messages. When the threshold of corrupted verifiers \(t<n/2\), the prover sends \(1/2+o(1)\) field elements per multiplication gate to every verifier; when \(t<n(1/2-\epsilon )\) for some constant \(0<\epsilon <1/2\), we can further reduce the communication to O(1/n) field elements per multiplication gate per verifier. Our MVZK protocols demonstrate particularly high scalability: the proofs are streamable and only require a memory proportional to what is needed to evaluate the circuit in the clear.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_18](https://doi.org/10.1007/978-3-031-22969-5_18)
## Rotatable Zero Knowledge Sets - Post Compromise Secure Auditable Dictionaries with Application to Key Transparency.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#rotatable-zero-knowledge-sets-post-compromise-secure-auditable-dictionaries-with-application-to-key-transparency)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#rotatable-zero-knowledge-sets-post-compromise-secure-auditable-dictionaries-with-application-to-key-transparency)
### Authors
* Brian Chen, Zoom Video Communications, San Jose, USA
* Balachandar Kesavan, Zoom Video Communications, San Jose, USA
* Antonio Marcedone, Zoom Video Communications, San Jose, USA
* Merry Ember Mou, Zoom Video Communications, San Jose, USA
* Yevgeniy Dodis, New York University, New York, USA
* Eli Goldin, New York University, New York, USA
* Esha Ghosh, Microsoft Research, Redmond, USA
### Abstract
> Key Transparency (KT) systems allow end-to-end encrypted service providers (messaging, calls, etc.) to maintain an auditable directory of their users’ public keys, producing proofs that all participants have a consistent view of those keys, and allowing each user to check updates to their own keys. KT has lately received a lot of attention, in particular its privacy preserving variants, which also ensure that users and auditors do not learn anything beyond what is necessary to use the service and keep the service provider accountable.
> 
> Abstractly, the problem of building such systems reduces to constructing so-called append-only Zero-Knowledge Sets (aZKS). Unfortunately, existing aZKS (and KT) solutions do not allow to adequately restore the privacy guarantees after a server compromise, a form of Post-Compromise Security (PCS), while maintaining the auditability properties. In this work we address this concern through the formalization of an extension of aZKS called Rotatable ZKS (\({{\textsf{RZKS}}}\)). In addition to providing PCS, our notion of \({{\textsf{RZKS}}}\) has several other attractive features, such as a stronger (extractable) soundness notion, and the ability for a communication party with out-of-date data to efficiently “catch up” to the current epoch while ensuring that the server did not erase any of the past data.
> 
> Of independent interest, we also introduce a new primitive called a Rotatable Verifiable Random Function (VRF), and show how to build \({{\textsf{RZKS}}}\) in a modular fashion from a rotatable VRF, ordered accumulator, and append-only vector commitment schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_19](https://doi.org/10.1007/978-3-031-22969-5_19)
## Nostradamus Goes Quantum.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#nostradamus-goes-quantum)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#nostradamus-goes-quantum)
### Authors
* Barbara Jiabao Benedikt, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Marc Fischlin, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
* Moritz Huppert, Cryptoplexity, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> In the Nostradamus attack, introduced by Kelsey and Kohno (Eurocrypt 2006), the adversary has to commit to a hash value y of an iterated hash function \(\textsf{H}\) such that, when later given a message prefix \(P\), the adversary is able to find a suitable “suffix explanation” \(S\) with \(\textsf{H}(P\left. \right\| {S})=y\). Kelsey and Kohno show a herding attack with \(2^{2n/3}\) evaluations of the compression function of \(\textsf{H}\) (with n bits output and state), locating the attack between preimage attacks and collision search in terms of complexity. Here we investigate the security of Nostradamus attacks for quantum adversaries. We present a quantum herding algorithm for the Nostradamus problem making approximately \(\root 3 \of {n}\cdot 2^{3n/7}\) compression function evaluations, significantly improving over the classical bound. We also prove that quantum herding attacks cannot do better than \(2^{3n/7}\) evaluations for random compression functions, showing that our algorithm is (essentially) optimal. We also discuss a slightly less tight bound of roughly \(2^{3n/7-s}\) for general Nostradamus attacks against random compression functions, where \(s\) is the maximal block length of the adversarially chosen suffix \(S\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_20](https://doi.org/10.1007/978-3-031-22969-5_20)
## Synthesizing Quantum Circuits of AES with Lower T-depth and Less Qubits.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#synthesizing-quantum-circuits-of-aes-with-lower-t-depth-and-less-qubits)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#synthesizing-quantum-circuits-of-aes-with-lower-t-depth-and-less-qubits)
### Authors
* Zhenyu Huang, SKLOIS, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenyu Huang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, School of Cryptology, University of Chinese Academy of Sciences, Beijing, China
* Siwei Sun, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
### Abstract
> The significant progress in the development of quantum computers has made the study of cryptanalysis based on quantum computing an active topic. To accurately estimate the resources required to carry out quantum attacks, the involved quantum algorithms have to be synthesized into quantum circuits with basic quantum gates. In this work, we present several generic synthesis and optimization techniques for circuits implementing the quantum oracles of iterative symmetric-key ciphers that are commonly employed in quantum attacks based on Grover and Simon’s algorithms. Firstly, a general structure for implementing the round functions of block ciphers in-place is proposed. Then, we present some novel techniques for synthesizing efficient quantum circuits of linear and non-linear cryptographic building blocks. We apply these techniques to AES and systematically investigate the strategies for depth-width trade-offs. Along the way, we derive a quantum circuit for the AES S-box with provably minimal T-depth based on some new observations on its classical circuit. As a result, the T-depth and width (number of qubits) required for implementing the quantum circuits of AES are significantly reduced. Compared with the circuit proposed in EUROCRYPT 2020, the T-depth is reduced from 60 to 40 without increasing the width or 30 with a slight increase in width. These circuits are fully implemented in Microsoft Q# and the source code is publicly available. Compared with the circuit proposed in ASIACRYPT 2020, the width of one of our circuits is reduced from 512 to 371, and the Toffoli-depth is reduced from 2016 to 1558 at the same time. Actually, we can reduce the width to 270 at the cost of increased depth. Moreover, a full spectrum of depth-width trade-offs is provided, setting new records for the synthesis and optimization of quantum circuits of AES.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_21](https://doi.org/10.1007/978-3-031-22969-5_21)
## Exploring SAT for Cryptanalysis: (Quantum) Collision Attacks Against 6-Round SHA-3.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#exploring-sat-for-cryptanalysis-quantum-collision-attacks-against-6-round-sha-3)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#exploring-sat-for-cryptanalysis-quantum-collision-attacks-against-6-round-sha-3)
### Authors
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Guozhen Liu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yi Tu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Ling Song, College of Cyber Security, Jinan University, Guangzhou, China
### Abstract
> In this work, we focus on collision attacks against instances of SHA-3 hash family in both classical and quantum settings. Since the 5-round collision attacks on SHA3-256 and other variants proposed by Guo et al. at JoC 2020, no other essential progress has been published. With a thorough investigation, we identify that the challenges of extending such collision attacks on SHA-3 to more rounds lie in the inefficiency of differential trail search. To overcome this obstacle, we develop a SAT-based automatic search toolkit. The tool is used in multiple intermediate steps of the collision attacks and exhibits surprisingly high efficiency in differential trail search and other optimization problems encountered in the process. As a result, we present the first 6-round classical collision attack on SHAKE128 with time complexity \(2^{123.5}\), which also forms a quantum collision attack with quantum time , and the first 6-round quantum collision attack on SHA3-224 and SHA3-256 with quantum time and , where S represents the hardware resources of the quantum computer. The fact that classical collision attacks do not apply to 6-round SHA3-224 and SHA3-256 shows the higher coverage of quantum collision attacks, which is consistent with that on SHA-2 observed by Hosoyamada and Sasaki at CRYPTO 2021.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_22](https://doi.org/10.1007/978-3-031-22969-5_22)
## Log-S-unit Lattices Using Explicit Stickelberger Generators to Solve Approx Ideal-SVP.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#log-s-unit-lattices-using-explicit-stickelberger-generators-to-solve-approx-ideal-svp)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#log-s-unit-lattices-using-explicit-stickelberger-generators-to-solve-approx-ideal-svp)
### Authors
* Olivier Bernard, Univ Rennes, CNRS, IRISA, Rennes, France
* Andrea Lesavourey, Univ Rennes, CNRS, IRISA, Rennes, France
* Tuong-Huy Nguyen, Univ Rennes, CNRS, IRISA, Rennes, France
* Adeline Roux-Langlois, Univ Rennes, CNRS, IRISA, Rennes, France
* Olivier Bernard, Thales, Gennevilliers, France
* Tuong-Huy Nguyen, DGA Maîtrise de l’Information, Bruz, France
### Abstract
> In 2020, Bernard and Roux-Langlois introduced the Twisted-PHS algorithm to solve Approx-Svp for ideal lattices on any number field, based on the PHS algorithm by Pellet-Mary, Hanrot and Stehlé. They performed experiments for prime conductors cyclotomic fields of degrees at most 70, one of the main bottlenecks being the computation of a log-\(\mathcal {S}\)-unit lattice which requires subexponential time.
> 
> Our main contribution is to extend these experiments to cyclotomic fields of degree up to 210 for most conductors m. Building upon new results from Bernard and Kučera on the Stickelberger ideal, we use explicit generators to construct full-rank log-\(\mathcal {S}\)-unit sublattices fulfilling the role of approximating the full Twisted-PHS lattice. In our best approximate regime, our results show that the Twisted-PHS algorithm outperforms, over our experimental range, the CDW algorithm by Cramer, Ducas and Wesolowski, and sometimes beats its asymptotic volumetric lower bound.
> 
> Additionally, we use these explicit Stickelberger generators to remove almost all quantum steps in the CDW algorithm, under the mild restriction that the plus part of the class number verifies \(h_{m}^{+}\le O(\sqrt{m})\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_23](https://doi.org/10.1007/978-3-031-22969-5_23)
## On Module Unique-SVP and NTRU.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#on-module-unique-svp-and-ntru)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#on-module-unique-svp-and-ntru)
### Authors
* Joël Felderhoff, Inria Lyon, Lyon, France
* Joël Felderhoff, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Alice Pellet-Mary, Univ. Bordeaux, CNRS, Inria, Bordeaux INP, IMB, Talence, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### Abstract
> The NTRU problem can be viewed as an instance of finding a short non-zero vector in a lattice, under the promise that it contains an exceptionally short vector. Further, the lattice under scope has the structure of a rank-2 module over the ring of integers of a number field. Let us refer to this problem as the module unique Shortest Vector Problem, or mod-uSVP for short. We exhibit two reductions that together provide evidence the NTRU problem is not just a particular case of mod-uSVP, but representative of it from a computational perspective.
> 
> First, we reduce worst-case mod-uSVP to worst-case NTRU. For this, we rely on an oracle for id-SVP, the problem of finding short non-zero vectors in ideal lattices. Using the worst-case id-SVP to worst-case NTRU reduction from Pellet-Mary and Stehlé [ASIACRYPT’21], this shows that worst-case NTRU is equivalent to worst-case mod-uSVP.
> 
> Second, we give a random self-reduction for mod-uSVP. We put forward a distribution \(D^{\textrm{uSVP}}\) over mod-uSVP instances such that solving mod-uSVP with a non-negligible probability for samples from \(D^{\textrm{uSVP}}\) allows to solve mod-uSVP in the worst-case. With the first result, this gives a reduction from worst-case mod-uSVP to an average-case version of NTRU where the NTRU instance distribution is inherited from \(D^{\textrm{uSVP}}\). This worst-case to average-case reduction requires an oracle for id-SVP.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_24](https://doi.org/10.1007/978-3-031-22969-5_24)
## A Non-heuristic Approach to Time-Space Tradeoffs and Optimizations for BKW.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#a-non-heuristic-approach-to-time-space-tradeoffs-and-optimizations-for-bkw)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#a-non-heuristic-approach-to-time-space-tradeoffs-and-optimizations-for-bkw)
### Authors
* Hanlin Liu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
### Abstract
> Blum, Kalai and Wasserman (JACM 2003) gave the first sub-exponential algorithm to solve the Learning Parity with Noise (LPN) problem. In particular, consider the LPN problem with constant noise and dimension n. The BKW solves it with space complexity \(2^{\frac{(1+\epsilon )n}{\log (n)}}\) and time/sample complexity \(2^{\frac{(1+\epsilon )n}{\log (n)}}\cdot 2^{\varOmega (n^{\frac{1}{1+\epsilon }})}\) for small constant \(\epsilon \rightarrow 0^+\).
> 
> We propose a variant of the BKW by tweaking Wagner’s generalized birthday problem (Crypto 2002) and adapting the technique to a c-ary tree structure. In summary, our algorithm achieves the following:
> 
> 1. (Time-space tradeoff). We obtain the same time-space tradeoffs for LPN and LWE as those given by Esser et al. (Crypto 2018), but without resorting to any heuristics. For any \(2\le c\in \mathbb {N}\), our algorithm solves the LPN problem with time complexity \(2^{\frac{\log (c) (1+\epsilon )n}{\log (n)}}\cdot 2^{\varOmega (n^{\frac{1}{1+\epsilon }})}\) and space complexity \(2^{\frac{\log (c) (1+\epsilon )n}{(c-1)\log (n)}}\) for \(\epsilon \rightarrow 0^+\), where one can use Grover’s quantum algorithm or Dinur et al.’s dissection technique (Crypto 2012) to further accelerate/optimize the time complexity.
> 
> 2. (Time/sample optimization). A further adjusted variant of our algorithm solves the LPN problem with sample, time and space complexities all kept at \(2^{\frac{(1+\epsilon )n}{\log (n)}}\), saving factor \(2^{\varOmega (n^{\frac{1}{1+\epsilon }})}\) for \(\epsilon \rightarrow 0^+\) in time/sample compared to the original BKW, and the variant of Devadas et al. (TCC 2017).
> 
> 3. (Sample reduction). Our algorithm provides an alternative to Lyubashevsky’s BKW variant (RANDOM 2005) for LPN with a restricted amount of samples. In particular, given \(Q=n^{1+\epsilon }\) (resp., \(Q=2^{n^{\epsilon }}\)) samples for any constant \(\epsilon >0\), our algorithm saves a factor of \(2^{\varOmega (n)/\log (n)^{1-\kappa }}\) (resp., \(2^{\varOmega (n^{\kappa })}\)) for constant \(\kappa \rightarrow 1^-\) in running time while consuming roughly the same space, compared with Lyubashevsky’s algorithm.
> 
> In particular, the time/sample optimization benefits from a careful analysis of the error distribution among the correlated candidates, which was not studied by previous rigorous approaches such as the analysis of Minder and Sinclair (J.Cryptology 2012) or Devadas et al. (TCC 2017).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_25](https://doi.org/10.1007/978-3-031-22969-5_25)
## Improving Bounds on Elliptic Curve Hidden Number Problem for ECDH Key Exchange.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-3].md#improving-bounds-on-elliptic-curve-hidden-number-problem-for-ecdh-key-exchange)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-3].md#improving-bounds-on-elliptic-curve-hidden-number-problem-for-ecdh-key-exchange)
### Authors
* Jun Xu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Jun Xu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
* Santanu Sarkar, Indian Institute of Technology Madras, Sardar Patel Road, Chennai, 600036, India
* Huaxiong Wang, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
### Abstract
> Elliptic Curve Hidden Number Problem (EC-HNP) was first introduced by Boneh, Halevi and Howgrave-Graham at Asiacrypt 2001. To rigorously assess the bit security of the Diffie–Hellman key exchange with elliptic curves (ECDH), the Diffie–Hellman variant of EC-HNP, regarded as an elliptic curve analogy of the Hidden Number Problem (HNP), was presented at PKC 2017. This variant can also be used for practical cryptanalysis of ECDH key exchange in the situation of side-channel attacks.
> 
> In this paper, we revisit the Coppersmith method for solving the involved modular multivariate polynomials in the Diffie–Hellman variant of EC-HNP and demonstrate that, for any given positive integer d, a given sufficiently large prime p, and a fixed elliptic curve over the prime field \(\mathbb {F}_p\), if there is an oracle that outputs about \(\frac{1}{d+1}\) of the most (least) significant bits of the x-coordinate of the ECDH key, then one can give a heuristic algorithm to compute all the bits within polynomial time in \(\log _2 p\). When \(d>1\), the heuristic result \(\frac{1}{d+1}\) significantly outperforms both the rigorous bound \(\frac{5}{6}\) and heuristic bound \(\frac{1}{2}\). Due to the heuristics involved in the Coppersmith method, we do not get the ECDH bit security on a fixed curve. However, we experimentally verify the effectiveness of the heuristics on NIST curves for small dimension lattices.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22969-5_26](https://doi.org/10.1007/978-3-031-22969-5_26)
