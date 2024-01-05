# Asiacrypt[2020-1]
## Finding Collisions in a Quantum World: Quantum Black-Box Separation of Collision-Resistance and One-Wayness.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#finding-collisions-in-a-quantum-world-quantum-black-box-separation-of-collision-resistance-and-one-wayness)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#finding-collisions-in-a-quantum-world-quantum-black-box-separation-of-collision-resistance-and-one-wayness)
### Authors
* Akinori Hosoyamada, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Akinori Hosoyamada, Nagoya University, Nagoya, Japan
### Abstract
> Since the celebrated work of Impagliazzo and Rudich (STOC 1989), a number of black-box impossibility results have been established. However, these works only ruled out classical black-box reductions among cryptographic primitives. Therefore it may be possible to overcome these impossibility results by using quantum reductions. To exclude such a possibility, we have to extend these impossibility results to the quantum setting. In this paper, we study black-box impossibility in the quantum setting.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_1](https://doi.org/10.1007/978-3-030-64837-4_1)
## New Results on Gimli: Full-Permutation Distinguishers and Improved Collisions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#new-results-on-gimli-full-permutation-distinguishers-and-improved-collisions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#new-results-on-gimli-full-permutation-distinguishers-and-improved-collisions)
### Authors
* Antonio Flórez Gutiérrez, Inria, Paris, France
* Gaëtan Leurent, Inria, Paris, France
* María Naya-Plasencia, Inria, Paris, France
* Léo Perrin, Inria, Paris, France
* André Schrottenloher, Inria, Paris, France
* Ferdinand Sibleyras, Inria, Paris, France
### Abstract
> \(\mathsf {Gimli}\) is a family of cryptographic primitives (both a hash function and an AEAD scheme) that has been selected for the second round of the NIST competition for standardizing new lightweight designs. The candidate \(\mathsf {Gimli}\) is based on the permutation \(\mathsf {Gimli}\), which was presented at CHES 2017. In this paper, we study the security of both the permutation and the constructions that are based on it. We exploit the slow diffusion in \(\mathsf {Gimli}\) and its internal symmetries to build, for the first time, a distinguisher on the full permutation of complexity \(2^{64}\). We also provide a practical distinguisher on 23 out of the full 24 rounds of \(\mathsf {Gimli}\) that has been implemented.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_2](https://doi.org/10.1007/978-3-030-64837-4_2)
## SQISign: Compact Post-quantum Signatures from Quaternions and Isogenies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#sqisign-compact-post-quantum-signatures-from-quaternions-and-isogenies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#sqisign-compact-post-quantum-signatures-from-quaternions-and-isogenies)
### Authors
* Luca De Feo, IBM Research, Zürich, Switzerland
* David Kohel, Aix Marseille University, CNRS, Centrale Marseille, I2M, Marseille, France
* Antonin Leroux, DGA, Paris, France
* Christophe Petit, University of Birmingham, Birmingham, UK
* Benjamin Wesolowski, Univ. Bordeaux, CNRS, Bordeaux INP, IMB, UMR 5251, F-33400, Talence, France
* Benjamin Wesolowski, INRIA, IMB, UMR 5251, F-33400, Talence, France
* Luca De Feo, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Paris, France
* Antonin Leroux, LIX, CNRS, Ecole Polytechnique, Institut Polytechnique de Paris, Paris, France
* Luca De Feo, INRIA, Rocquencourt, France
* Antonin Leroux, INRIA, Rocquencourt, France
* Christophe Petit, Université libre de Bruxelles, Brussels, Belgium
### Abstract
> We introduce a new signature scheme, SQISign, (for Short Quaternion and Isogeny Signature) from isogeny graphs of supersingular elliptic curves. The signature scheme is derived from a new one-round, high soundness, interactive identification protocol. Targeting the post-quantum NIST-1 level of security, our implementation results in signatures of 204 bytes, secret keys of 16 bytes and public keys of 64 bytes. In particular, the signature and public key sizes combined are an order of magnitude smaller than all other post-quantum signature schemes. On a modern workstation, our implementation in C takes 0.6 s for key generation, 2.5 s for signing, and 50 ms for verification.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_3](https://doi.org/10.1007/978-3-030-64837-4_3)
## Public-Key Generation with Verifiable Randomness.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#public-key-generation-with-verifiable-randomness)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#public-key-generation-with-verifiable-randomness)
### Authors
* Olivier Blazy, Universite de Limoges, Limoges, France
* Patrick Towa, IBM Research – Zurich, Rüschlikon, Switzerland
* Patrick Towa, DIENS, École Normale Supérieure, CNRS, PSL University, Paris, France
* Damien Vergnaud, Sorbonne Université, CNRS, LIP6, 75005, Paris, France
* Damien Vergnaud, Institut Universitaire de France, Paris, France
### Abstract
> We revisit the problem of proving that a user algorithm selected and correctly used a truly random seed in the generation of her cryptographic key. A first approach was proposed in 2002 by Juels and Guajardo for the validation of RSA secret keys. We present a new security model and general tools to efficiently prove that a private key was generated at random according to a prescribed process, without revealing any further information about the private key.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_4](https://doi.org/10.1007/978-3-030-64837-4_4)
## Simulation-Sound Arguments for LWE and Applications to KDM-CCA2 Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#simulation-sound-arguments-for-lwe-and-applications-to-kdm-cca2-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#simulation-sound-arguments-for-lwe-and-applications-to-kdm-cca2-security)
### Authors
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Radu Titiu, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Khoa Nguyen, Nanyang Technological University, SPMS, Singapore, Singapore
* Alain Passelègue, Inria, Lyon, France
* Radu Titiu, Bitdefender, Bucharest, Romania
### Abstract
> The Naor-Yung paradigm is a well-known technique that constructs IND-CCA2-secure encryption schemes by means of non-interactive zero-knowledge proofs satisfying a notion of simulation-soundness. Until recently, it was an open problem to instantiate it under the sole Learning-With-Errors (\(\mathsf {LWE}\)) assumption without relying on random oracles. While the recent results of Canetti et al. (STOC’19) and Peikert-Shiehian (Crypto’19) provide a solution to this problem by applying the Fiat-Shamir transform in the standard model, the resulting constructions are extremely inefficient as they proceed via a reduction to an NP-complete problem. In this paper, we give a direct, non-generic method for instantiating Naor-Yung under the \(\mathsf {LWE}\) assumption outside the random oracle model. Specifically, we give a direct construction of an unbounded simulation-sound NIZK argument system which, for carefully chosen parameters, makes it possible to express the equality of plaintexts encrypted under different keys in Regev’s cryptosystem. We also give a variant of our argument that provides tight security. As an application, we obtain an \(\mathsf {LWE}\)-based public-key encryption scheme for which we can prove (tight) key-dependent message security under chosen-ciphertext attacks in the standard model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_5](https://doi.org/10.1007/978-3-030-64837-4_5)
## CCA-Secure (Puncturable) KEMs from Encryption with Non-Negligible Decryption Errors.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#cca-secure-puncturable-kems-from-encryption-with-non-negligible-decryption-errors)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#cca-secure-puncturable-kems-from-encryption-with-non-negligible-decryption-errors)
### Authors
* Valerio Cini, AIT Austrian Institute of Technology, Vienna, Austria
* Sebastian Ramacher, AIT Austrian Institute of Technology, Vienna, Austria
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
* Christoph Striecks, AIT Austrian Institute of Technology, Vienna, Austria
### Abstract
> Public-key encryption (PKE) schemes or key-encapsulation mechanisms (KEMs) are fundamental cryptographic building blocks to realize secure communication protocols. There are several known transformations that generically turn weakly secure schemes into strongly (i.e., IND-CCA) secure ones. While most of these transformations require the weakly secure scheme to provide perfect correctness, Hofheinz, Hövelmanns, and Kiltz (HHK) (TCC 2017) have recently shown that variants of the Fujisaki-Okamoto (FO) transform can work with schemes that have negligible correctness error in the (quantum) random oracle model (QROM). Many recent schemes in the NIST post-quantum competition (PQC) use variants of these transformations. Some of their CPA-secure versions even have a non-negligible correctness error and so the techniques of HHK cannot be applied.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_6](https://doi.org/10.1007/978-3-030-64837-4_6)
## Possibility and Impossibility Results for Receiver Selective Opening Secure PKE in the Multi-challenge Setting.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#possibility-and-impossibility-results-for-receiver-selective-opening-secure-pke-in-the-multi-challenge-setting)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#possibility-and-impossibility-results-for-receiver-selective-opening-secure-pke-in-the-multi-challenge-setting)
### Authors
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Man Ho Au, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Qiuliang Xu, School of Software, Shandong University, Jinan, China
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong NSW, Australia
### Abstract
> Public key encryption (PKE) schemes are usually deployed in an open system with numerous users. In practice, it is common that some users are corrupted. A PKE scheme is said to be receiver selective opening (RSO) secure if it can still protect messages transmitted to uncorrupted receivers after the adversary corrupts some receivers and learns their secret keys. This is usually defined by requiring the existence of a simulator that can simulate the view of the adversary given only the opened messages. Existing works construct RSO secure PKE schemes in a single-challenge setting, where the adversary can only obtain one challenge ciphertext for each public key. However, in practice, it is preferable to have a PKE scheme with RSO security in the multi-challenge setting, where public keys can be used to encrypt multiple messages. In this work, we explore the possibility of achieving PKE schemes with receiver selective opening security in the multi-challenge setting. Our contributions are threefold. First, we demonstrate that PKE schemes with RSO security in the single-challenge setting are not necessarily RSO secure in the multi-challenge setting. Then, we show that it is impossible to achieve RSO security for PKE schemes if the number of challenge ciphertexts under each public key is a priori unbounded. In particular, we prove that no PKE scheme can be RSO secure in the k-challenge setting (i.e., the adversary can obtain k challenge ciphertexts for each public key) if its secret key contains less than k bits. On the positive side, we give a concrete construction of PKE scheme with RSO security in the k-challenge setting, where the ratio of the secret key length to k approaches the lower bound 1.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_7](https://doi.org/10.1007/978-3-030-64837-4_7)
## Security Reductions for White-Box Key-Storage in Mobile Payments.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#security-reductions-for-white-box-key-storage-in-mobile-payments)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#security-reductions-for-white-box-key-storage-in-mobile-payments)
### Authors
* Estuardo Alpirez Bock, Aalto University, Helsinki, Finland
* Chris Brzuska, Aalto University, Helsinki, Finland
* Marc Fischlin, Technische Universität Darmstadt, Darmstadt, Germany
* Christian Janson, Technische Universität Darmstadt, Darmstadt, Germany
* Wil Michiels, Technische Universiteit Eindhoven, Eindhoven, The Netherlands
* Wil Michiels, NXP Semiconductors, Eindhoven, The Netherlands
### Abstract
> The goal of white-box cryptography is to provide security even when the cryptographic implementation is executed in adversarially controlled environments. White-box implementations nowadays appear in commercial products such as mobile payment applications, e.g., those certified by Mastercard. Interestingly, there, white-box cryptography is championed as a tool for secure storage of payment tokens, and importantly, the white-boxed storage functionality is bound to a hardware functionality to prevent code-lifting attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_8](https://doi.org/10.1007/978-3-030-64837-4_8)
## Circular Security Is Complete for KDM Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#circular-security-is-complete-for-kdm-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#circular-security-is-complete-for-kdm-security)
### Authors
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Takahiro Matsuda, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
### Abstract
> Circular security is the most elementary form of key-dependent message (KDM) security, which allows us to securely encrypt only a copy of secret key bits. In this work, we show that circular security is complete for KDM security in the sense that an encryption scheme satisfying this security notion can be transformed into one satisfying KDM security with respect to all functions computable by a-priori bounded-size circuits (bounded-KDM security). This result holds in the presence of any number of keys and in any of secret-key/public-key and CPA/CCA settings. Such a completeness result was previously shown by Applebaum (EUROCRYPT 2011) for KDM security with respect to projection functions (projection-KDM security) that allows us to securely encrypt both a copy and a negation of secret key bits. Besides amplifying the strength of KDM security, our transformation in fact can start from an encryption scheme satisfying circular security against CPA attacks and results in one satisfying bounded-KDM security against CCA attacks. This result improves the recent result by Kitagawa and Matsuda (TCC 2019) showing a CPA-to-CCA transformation for KDM secure public-key encryption schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_9](https://doi.org/10.1007/978-3-030-64837-4_9)
## Scalable Ciphertext Compression Techniques for Post-quantum KEMs and Their Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#scalable-ciphertext-compression-techniques-for-post-quantum-kems-and-their-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#scalable-ciphertext-compression-techniques-for-post-quantum-kems-and-their-applications)
### Authors
* Shuichi Katsumata, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Kris Kwiatkowski, PQShield, Oxford, UK
* Thomas Prest, PQShield, Oxford, UK
* Federico Pintore, Mathematical Institute, University of Oxford, Oxford, UK
### Abstract
> A multi-recipient key encapsulation mechanism, or \(\mathsf {m}\mathsf {KEM}\), provides a scalable solution to securely communicating to a large group, and offers savings in both bandwidth and computational cost compared to the trivial solution of communicating with each member individually. All prior works on \(\mathsf {m}\mathsf {KEM}\) are only limited to classical assumptions and, although some generic constructions are known, they all require specific properties that are not shared by most post-quantum schemes. In this work, we first provide a simple and efficient generic construction of \(\mathsf {m}\mathsf {KEM}\) that can be instantiated from versatile assumptions, including post-quantum ones. We then study these \(\mathsf {m}\mathsf {KEM}\) instantiations at a practical level using 8 post-quantum \(\mathsf {KEM}\)s (which are lattice and isogeny-based NIST candidates), and CSIDH, and show that compared to the trivial solution, our \(\mathsf {m}\mathsf {KEM}\) offers savings of at least one order of magnitude in the bandwidth, and make encryption time shorter by a factor ranging from 1.92 to 35. Additionally, we show that by combining \(\mathsf {m}\mathsf {KEM}\) with the TreeKEM protocol used by MLS – an IETF draft for secure group messaging – we obtain significant bandwidth savings.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_10](https://doi.org/10.1007/978-3-030-64837-4_10)
## Post-Quantum Verification of Fujisaki-Okamoto.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#post-quantum-verification-of-fujisaki-okamoto)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#post-quantum-verification-of-fujisaki-okamoto)
### Authors
* Dominique Unruh, University of Tartu, Tartu, Estonia
### Abstract
> We present a computer-verified formalization of the post-quantum security proof of the Fujisaki-Okamoto transform (as analyzed by Hövelmanns, Kiltz, Schäge, and Unruh, PKC 2020).
The formalization is done in quantum relational Hoare logic and checked in the qrhl-tool (Unruh, POPL 2019).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_11](https://doi.org/10.1007/978-3-030-64837-4_11)
## A New Decryption Failure Attack Against HQC.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#a-new-decryption-failure-attack-against-hqc)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#a-new-decryption-failure-attack-against-hqc)
### Authors
* Qian Guo, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Thomas Johansson, Department of Electrical and Information Technology, Lund University, P.O. Box 118, 221 00, Lund, Sweden
* Qian Guo, Department of Informatics, University of Bergen, P.O. Box 7803, 5020, Bergen, Norway
### Abstract
> HQC is an IND-CCA2 KEM running for standardization in NIST’s post-quantum cryptography project and has advanced to the second round. It is a code-based scheme in the class of public key encryptions, with given sets of parameters spanning NIST security strength 1, 3 and 5, corresponding to 128, 192 and 256 bits of classic security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_12](https://doi.org/10.1007/978-3-030-64837-4_12)
## A Bit-Vector Differential Model for the Modular Addition by a Constant.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#a-bit-vector-differential-model-for-the-modular-addition-by-a-constant)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#a-bit-vector-differential-model-for-the-modular-addition-by-a-constant)
### Authors
* Seyyed Arash Azimi, Department of Electrical Engineering, Sharif University of Technology, Tehran, Iran
* Mohammad Reza Aref, Department of Electrical Engineering, Sharif University of Technology, Tehran, Iran
* Adrián Ranea, imec-COSIC, KU Leuven, Leuven, Belgium
* Vincent Rijmen, imec-COSIC, KU Leuven, Leuven, Belgium
* Mahmoud Salmasizadeh, Electronic Research Institute, Sharif University of Technology, Tehran, Iran
* Javad Mohajeri, Electronic Research Institute, Sharif University of Technology, Tehran, Iran
* Vincent Rijmen, Department of Informatics, UiB, Bergen, Norway
### Abstract
> ARX algorithms are a class of symmetric-key algorithms constructed by Addition, Rotation, and XOR, which achieve the best software performances in low-end microcontrollers. To evaluate the resistance of an ARX cipher against differential cryptanalysis and its variants, the recent automated methods employ constraint satisfaction solvers, such as SMT solvers, to search for optimal characteristics. The main difficulty to formulate this search as a constraint satisfaction problem is obtaining the differential models of the non-linear operations, that is, the constraints describing the differential probability of each non-linear operation of the cipher. While an efficient bit-vector differential model was obtained for the modular addition with two variable inputs, no differential model for the modular addition by a constant has been proposed so far, preventing ARX ciphers including this operation from being evaluated with automated methods.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_13](https://doi.org/10.1007/978-3-030-64837-4_13)
## Mind the Propagation of States - New Automatic Search Tool for Impossible Differentials and Impossible Polytopic Transitions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#mind-the-propagation-of-states-new-automatic-search-tool-for-impossible-differentials-and-impossible-polytopic-transitions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#mind-the-propagation-of-states-new-automatic-search-tool-for-impossible-differentials-and-impossible-polytopic-transitions)
### Authors
* Xichao Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yongqiang Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Shizhu Tian, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Mingsheng Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xichao Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yongqiang Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Shizhu Tian, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Mingsheng Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lin Jiao, State Key Laboratory of Cryptology, Beijing, China
### Abstract
> Impossible differentials cryptanalysis and impossible polytopic cryptanalysis are the most effective approaches to estimate the security of block ciphers. However, the previous automatic search methods of their distinguishers, impossible differentials and impossible polytopic transitions, neither consider the impact of key schedule in the single-key setting and the differential property of large S-boxes, nor apply to the block ciphers with variable rotations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_14](https://doi.org/10.1007/978-3-030-64837-4_14)
## An Algebraic Formulation of the Division Property: Revisiting Degree Evaluations, Cube Attacks, and Key-Independent Sums.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-formulation-of-the-division-property-revisiting-degree-evaluations-cube-attacks-and-key-independent-sums)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-formulation-of-the-division-property-revisiting-degree-evaluations-cube-attacks-and-key-independent-sums)
### Authors
* Kai Hu, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Siwei Sun, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Qingju Wang, SnT, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Kai Hu, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, Shandong, China
* Siwei Sun, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Since it was proposed in 2015 as a generalization of integral properties, the division property has evolved into a powerful tool for probing the structures of Boolean functions whose algebraic normal forms are not available. We capture the most essential elements for the detection of division properties from a pure algebraic perspective, proposing a technique named as monomial prediction, which can be employed to determine the presence or absence of a monomial in any product of the coordinate functions of a vectorial Boolean function \(\textit{\textbf{f}}\) by counting the number of the so-called monomial trails across a sequence of simpler functions whose composition is \(\textit{\textbf{f}}\). Under the framework of the monomial prediction, we formally prove that most algorithms for detecting division properties in literature raise no false alarms but may miss. We also establish the equivalence between the monomial prediction and the three-subset bit-based division property without unknown subset presented at EUROCRYPT 2020, and show that these two techniques are perfectly accurate.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_15](https://doi.org/10.1007/978-3-030-64837-4_15)
## An Algebraic Attack on Ciphers with Low-Degree Round Functions: Application to Full MiMC.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-attack-on-ciphers-with-low-degree-round-functions-application-to-full-mimc)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#an-algebraic-attack-on-ciphers-with-low-degree-round-functions-application-to-full-mimc)
### Authors
* Maria Eichlseder, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, IAIK, Graz University of Technology, Graz, Austria
* Reinhard Lüftenegger, IAIK, Graz University of Technology, Graz, Austria
* Christian Rechberger, IAIK, Graz University of Technology, Graz, Austria
* Markus Schofnegger, IAIK, Graz University of Technology, Graz, Austria
* Lorenzo Grassi, Digital Security Group, Radboud University, Nijmegen, The Netherlands
* Morten Øygarden, Simula UiB, Bergen, Norway
* Qingju Wang, SnT, University of Luxembourg, Luxembourg City, Luxembourg
### Abstract
> Algebraically simple PRFs, ciphers, or cryptographic hash functions are becoming increasingly popular, for example due to their attractive properties for MPC and new proof systems (SNARKs, STARKs, among many others).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_16](https://doi.org/10.1007/978-3-030-64837-4_16)
## Improvements of Algebraic Attacks for Solving the Rank Decoding and MinRank Problems.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#improvements-of-algebraic-attacks-for-solving-the-rank-decoding-and-minrank-problems)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#improvements-of-algebraic-attacks-for-solving-the-rank-decoding-and-minrank-problems)
### Authors
* Maxime Bros, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Philippe Gaborit, Univ. Limoges, CNRS, XLIM, UMR 7252, 87000, Limoges, France
* Ray Perlner, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, National Institute of Standards and Technology, Gaithersburg, USA
* Daniel Smith-Tone, University of Louisville, Louisville, USA
* Magali Bardet, Inria, 2 rue Simone Iff, 75012, Paris, France
* Jean-Pierre Tillich, Inria, 2 rue Simone Iff, 75012, Paris, France
* Magali Bardet, LITIS, University of Rouen Normandie, Mont-Saint-Aignan, France
* Daniel Cabarcas, Universidad Nacional de Colombia Sede Medellín, Medellín, Colombia
* Javier Verbel, Universidad Nacional de Colombia Sede Medellín, Medellín, Colombia
### Abstract
> In this paper, we show how to significantly improve algebraic techniques for solving the MinRank problem, which is ubiquitous in multivariate and rank metric code based cryptography. In the case of the structured MinRank instances arising in the latter, we build upon a recent breakthrough [11] showing that algebraic attacks outperform the combinatorial ones that were considered state of the art up until now. Through a slight modification of this approach, we completely avoid Gröbner bases computations for certain parameters and are left only with solving linear systems. This does not only substantially improve the complexity, but also gives a convincing argument as to why algebraic techniques work in this case. When used against the second round NIST-PQC candidates ROLLO-I-128/192/256, our new attack has bit complexity respectively 71, 87, and 151, to be compared to 117, 144, and 197 as obtained in [11]. The linear systems arise from the nullity of the maximal minors of a certain matrix associated to the algebraic modeling. We also use a similar approach to improve the algebraic MinRank solvers for the usual MinRank problem. When applied against the second round NIST-PQC candidates GeMSS and Rainbow, our attack has a complexity that is very close to or even slightly better than those of the best known attacks so far. Note that these latter attacks did not rely on MinRank techniques since the MinRank approach used to give complexities that were far away from classical security levels.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_17](https://doi.org/10.1007/978-3-030-64837-4_17)
## Lower Bounds on the Degree of Block Ciphers.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#lower-bounds-on-the-degree-of-block-ciphers)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#lower-bounds-on-the-degree-of-block-ciphers)
### Authors
* Phil Hebborn, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Baptiste Lambin, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Gregor Leander, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, Horst Görtz Institute for IT Security, Ruhr University Bochum, Bochum, Germany
* Yosuke Todo, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> Only the method to estimate the upper bound of the algebraic degree on block ciphers is known so far, but it is not useful for the designer to guarantee the security. In this paper we provide meaningful lower bounds on the algebraic degree of modern block ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_18](https://doi.org/10.1007/978-3-030-64837-4_18)
## Towards Closing the Security Gap of Tweak-aNd-Tweak (TNT).
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#towards-closing-the-security-gap-of-tweak-and-tweak-tnt)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#towards-closing-the-security-gap-of-tweak-and-tweak-tnt)
### Authors
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, China
* Jian Guo, Division of Mathematical Sciences, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Eik List, Bauhaus-Universität Weimar, Weimar, Germany
* Ling Song, Jinan University, Guangzhou, China
* Ling Song, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
### Abstract
> Tweakable block ciphers (TBCs) have been established as a valuable replacement for many applications of classical block ciphers. While several dedicated TBCs have been proposed in the previous years, generic constructions that build a TBC from a classical block cipher are still highly useful, for example, to reuse an existing implementation. However, most generic constructions need an additional call to either the block cipher or a universal hash function to process the tweak, which limited their efficiency.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_19](https://doi.org/10.1007/978-3-030-64837-4_19)
## Minimizing the Two-Round Tweakable Even-Mansour Cipher.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#minimizing-the-two-round-tweakable-even-mansour-cipher)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#minimizing-the-two-round-tweakable-even-mansour-cipher)
### Authors
* Avijit Dutta, Institute for Advancing Intelligence, TCG-CREST, Kolkata, India
### Abstract
> In CRYPTO 2015, Cogliati et al. have proposed one-round tweakable Even-Mansour (1-TEM) cipher constructed out of a single n-bit public permutation \(\pi \) and a uniform and almost XOR-universal hash function H as \((k, t, x) \mapsto \textsf {H}_k(t) \oplus \pi (\textsf {H}_k(t) \oplus x)\), where t is the tweak, and x is the n-bit message. Authors have shown that its two-round extension, which we refer to as 2-TEM, obtained by cascading 2-independent instances of the construction gives 2n/3-bit security and r-round cascading gives \(rn/r+2\)-bit security. In ASIACRYPT 2015, Cogliati and Seurin have shown that four-round tweakable Even-Mansour cipher, which we refer to as 4-TEM, constructed out of four independent n-bit permutations \(\pi _1, \pi _2, \pi _3, \pi _4\) and two independent n-bit keys \(k_1, k_2\), defined as

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_20](https://doi.org/10.1007/978-3-030-64837-4_20)
## Beyond Birthday Bound Secure Fresh Rekeying: Application to Authenticated Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#beyond-birthday-bound-secure-fresh-rekeying-application-to-authenticated-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#beyond-birthday-bound-secure-fresh-rekeying-application-to-authenticated-encryption)
### Authors
* Bart Mennink, Digital Security Group, Radboud University, Nijmegen, The Netherlands
### Abstract
> Fresh rekeying is a well-established method to protect a primitive or mode against side-channel attacks: an easy to protect but cryptographically not so involved function generates a subkey from the master key, and this subkey is then used for the block encryption of a single or a few messages. It is an efficient way to achieve side-channel protection, but current solutions only achieve birthday bound security in the block size of the cipher and thus halve its security (except if more involved primitives are employed). We present generalized solutions to parallel block cipher rekeying that, for the first time, achieve security beyond the birthday bound in the block size n. The first solution involves, next to the subkey generation, one multiplication and the core block cipher call and achieves \(2^{2n/3}\) security. The second solution makes two block cipher calls, and achieves optimal \(2^n\) security. Our third solution uses a slightly larger subkey generation function but requires no adaptations to the core encryption and also achieves optimal security. The construction seamlessly generalizes to permutation based fresh rekeying. Central to our schemes is the observation that fresh rekeying and generic tweakable block cipher design are two very related topics, and we can take lessons from the advanced results in the latter to improve our understanding and development of the former. We subsequently use these rekeying schemes in a constructive manner to deliver three authenticated encryption modes that achieve beyond birthday bound security and are easy to protect against side-channel attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_21](https://doi.org/10.1007/978-3-030-64837-4_21)
## Tight Security Analysis of 3-Round Key-Alternating Cipher with a Single Permutation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#tight-security-analysis-of-3-round-key-alternating-cipher-with-a-single-permutation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#tight-security-analysis-of-3-round-key-alternating-cipher-with-a-single-permutation)
### Authors
* Yusai Wu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Liqing Yu, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Xiaolei Dong, Shanghai Key Laboratory of Trustworthy Computing, East China Normal University, Shanghai, China
* Zhenfu Cao, Cyberspace Security Research Center, Peng Cheng Laboratory, Shenzhen, China
* Zhenfu Cao, Shanghai Institute of Intelligent Science and Technology, Tongji University, Shanghai, China
### Abstract
> The tight security bound of the KAC (Key-Alternating Cipher) construction whose round permutations are independent from each other has been well studied. Then a natural question is how the security bound will change when we use fewer permutations in a KAC construction. In CRYPTO 2014, Chen et al. proved that 2-round KAC with a single permutation (2KACSP) has the same security level as the classic one (i.e., 2-round KAC). But we still know little about the security bound of incompletely-independent KAC constructions with more than 2 rounds. In this paper, we will show that a similar result also holds for 3-round case. More concretely, we prove that 3-round KAC with a single permutation (3KACSP) is secure up to \(\varTheta (2^{\frac{3n}{4}})\) queries, which also caps the security of 3-round KAC. To avoid the cumbersome graphical illustration used in Chen et al.’s work, a new representation is introduced to characterize the underlying combinatorial problem. Benefited from it, we can handle the knotty dependence in a modular way, and also show a plausible way to study the security of rKACSP. Technically, we abstract a type of problems capturing the intrinsic randomness of rKACSP construction, and then propose a high-level framework to handle such problems. Furthermore, our proof techniques show some evidence that for any r, rKACSP has the same security level as the classic r-round KAC in random permutation model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_22](https://doi.org/10.1007/978-3-030-64837-4_22)
## Improved Security Analysis for Nonce-Based Enhanced Hash-then-Mask MACs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#improved-security-analysis-for-nonce-based-enhanced-hash-then-mask-macs)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#improved-security-analysis-for-nonce-based-enhanced-hash-then-mask-macs)
### Authors
* Wonseok Choi, KAIST, Daejeon, Korea
* Byeonghak Lee, KAIST, Daejeon, Korea
* Yeongmin Lee, KAIST, Daejeon, Korea
* Jooyoung Lee, KAIST, Daejeon, Korea
### Abstract
> In this paper, we prove that the nonce-based enhanced hash-then-mask MAC (\(\mathsf {nEHtM}\)) is secure up to \(2^{\frac{3n}{4}}\) MAC queries and \(2^n\) verification queries (ignoring logarithmic factors) as long as the number of faulty queries \(\mu \) is below \(2^\frac{3n}{8}\), significantly improving the previous bound by Dutta et al. Even when \(\mu \) goes beyond \(2^{\frac{3n}{8}}\), \(\mathsf {nEHtM}\) enjoys graceful degradation of security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_23](https://doi.org/10.1007/978-3-030-64837-4_23)
## On the Adaptive Security of MACs and PRFs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#on-the-adaptive-security-of-macs-and-prfs)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#on-the-adaptive-security-of-macs-and-prfs)
### Authors
* Andrew Morgan, Cornell University, Ithaca, USA
* Elaine Shi, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York City, USA
### Abstract
> We consider the security of two of the most commonly used cryptographic primitives—message authentication codes (MACs) and pseudorandom functions (PRFs)—in a multi-user setting with adaptive corruption. Whereas is it well known that any secure MAC or PRF is also multi-user secure under adaptive corruption, the trivial reduction induces a security loss that is linear in the number of users.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_24](https://doi.org/10.1007/978-3-030-64837-4_24)
## How to Build Optimally Secure PRFs Using Block Ciphers.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#how-to-build-optimally-secure-prfs-using-block-ciphers)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#how-to-build-optimally-secure-prfs-using-block-ciphers)
### Authors
* Benoît Cogliati, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Ashwin Jha, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
### Abstract
> In EUROCRYPT ’96, Aiello and Venkatesan proposed two candidates for 2n-bit to 2n-bit pseudorandom functions (PRFs), called Benes and modified Benes (or mBenes), based on n-bit to n-bit PRFs. While Benes is known to be secure up to \( 2^n \) queries (Patarin, AFRICACRYPT ’08), the security of mBenes has only been proved up to \( 2^{n(1-\epsilon )} \) queries for all \( \epsilon > 0 \) by Patarin and Montreuil in ICISC ’05. In this work, we show that the composition of a 2n-bit hash function with mBenes is a secure variable input length (VIL) PRF up to \( 2^{n-2} \) queries (given appropriate hash function bounds). We extend our analysis with block ciphers as the underlying primitive and obtain two optimally secure VIL PRFs using block ciphers. The first of these candidates requires 6 calls to the block cipher. The second candidate requires just 4 calls to the block cipher, but here the proof is based on Patarin’s mirror theory. Further, we instantiate the hash function with a PMAC+/LightMAC+ like hash, to get six candidates for deterministic message authentication codes with optimal security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_25](https://doi.org/10.1007/978-3-030-64837-4_25)
## SILVER - Statistical Independence and Leakage Verification.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#silver-statistical-independence-and-leakage-verification)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#silver-statistical-independence-and-leakage-verification)
### Authors
* David Knichel, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
* Pascal Sasdrich, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
* Amir Moradi, Ruhr University Bochum, Horst Görtz Institute for IT Security, Bochum, Germany
### Abstract
> Implementing cryptographic functions securely in the presence of physical adversaries is still a challenge although a lion’s share of research in the physical security domain has been put in development of countermeasures. Among several protection schemes, masking has absorbed the most attention of research in both academic and industrial communities, due to its theoretical foundation allowing to provide proofs or model the achieved security level. In return, masking schemes are difficult to implement as the implementation process often is manual, complex, and error-prone. This motivated the need for formal verification tools that allow the designers and engineers to analyze and verify the designs before manufacturing.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_26](https://doi.org/10.1007/978-3-030-64837-4_26)
## Cryptanalysis of Masked Ciphers: A Not So Random Idea.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#cryptanalysis-of-masked-ciphers-a-not-so-random-idea)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#cryptanalysis-of-masked-ciphers-a-not-so-random-idea)
### Authors
* Tim Beyne, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Siemen Dhooghe, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
* Zhenda Zhang, imec-COSIC, ESAT, KU Leuven, Leuven, Belgium
### Abstract
> A new approach to the security analysis of hardware-oriented masked ciphers against second-order side-channel attacks is developed. By relying on techniques from symmetric-key cryptanalysis, concrete security bounds are obtained in a variant of the probing model that allows the adversary to make only a bounded, but possibly very large, number of measurements. Specifically, it is formally shown how a bounded-query variant of robust probing security can be reduced to the linear cryptanalysis of masked ciphers. As a result, the compositional issues of higher-order threshold implementations can be overcome without relying on fresh randomness. From a practical point of view, the aforementioned approach makes it possible to transfer many of the desirable properties of first-order threshold implementations, such as their low randomness usage, to the second-order setting. For example, a straightforward application to the block cipher LED results in a masking using less than 700 random bits including the initial sharing. In addition, the cryptanalytic approach introduced in this paper provides additional insight into the design of masked ciphers and allows for a quantifiable trade-off between security and performance.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_27](https://doi.org/10.1007/978-3-030-64837-4_27)
## Packed Multiplication: How to Amortize the Cost of Side-Channel Masking?
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#packed-multiplication-how-to-amortize-the-cost-of-side-channel-masking)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#packed-multiplication-how-to-amortize-the-cost-of-side-channel-masking)
### Authors
* Weijia Wang, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Chun Guo, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Weijia Wang, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Chun Guo, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Weijia Wang, State Key Laboratory of Information Security (Institute of Information Engineering), Chinese Academy of Sciences, Beijing, 100093, China
* Chun Guo, State Key Laboratory of Information Security (Institute of Information Engineering), Chinese Academy of Sciences, Beijing, 100093, China
* François-Xavier Standaert, Institute of Information and Communication Technologies, Electronics and Applied Mathematics (ICTEAM), UCLouvain, 1348, Louvain-la-Neuve, Belgium
* Gaëtan Cassiers, Institute of Information and Communication Technologies, Electronics and Applied Mathematics (ICTEAM), UCLouvain, 1348, Louvain-la-Neuve, Belgium
* Yu Yu, Department of Computer Science and Engineering, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Qizhi Institute, Shanghai, 200232, China
### Abstract
> Higher-order masking countermeasures provide strong provable security against side-channel attacks at the cost of incurring significant overheads, which largely hinders its applicability. Previous works towards remedying cost mostly concentrated on “local” calculations, i.e., optimizing the cost of computation units such as a single AND gate or a field multiplication. This paper explores a complementary “global” approach, i.e., considering multiple operations in the masked domain as a batch and reducing randomness and computational cost via amortization. In particular, we focus on the amortization of \(\ell \) parallel field multiplications for appropriate integer \(\ell > 1\), and design a kit named packed multiplication for implementing such a batch. For \(\ell +d\le 2^m\), when \(\ell \) parallel multiplications over \(\mathbb {F}_{2^{m}}\) with d-th order probing security are implemented, packed multiplication consumes \(d^2+2\ell d + \ell \) bilinear multiplications and \(2d^2 + d(d+1)/2\) random field variables, outperforming the state-of-the-art results with \(O(\ell d^2)\) multiplications and \(\ell \left\lfloor d^2/4\right\rfloor + \ell d\) randomness. To prove d-probing security for packed multiplications, we introduce some weaker security notions for multiple-inputs-multiple-outputs gadgets and use them as intermediate steps, which may be of independent interest. As parallel field multiplications exist almost everywhere in symmetric cryptography, lifting optimizations from “local” to “global” substantially enlarges the space of improvements. To demonstrate, we showcase the method on the AES Subbytes step, GCM and TET (a popular disk encryption). Notably, when \(d=8\), our implementation of AES Subbytes in ARM Cortex M architecture achieves a gain of up to \(33\%\) in total speeds and saves up to \(68\%\) random bits than the state-of-the-art bitsliced implementation reported at ASIACRYPT 2018.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_28](https://doi.org/10.1007/978-3-030-64837-4_28)
## Side Channel Information Set Decoding Using Iterative Chunking - Plaintext Recovery from the "Classic McEliece" Hardware Reference Implementation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2020-1].md#side-channel-information-set-decoding-using-iterative-chunking-plaintext-recovery-from-the-classic-mceliece-hardware-reference-implementation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2020-1].md#side-channel-information-set-decoding-using-iterative-chunking-plaintext-recovery-from-the-classic-mceliece-hardware-reference-implementation)
### Authors
* Norman Lahr, Fraunhofer SIT, Darmstadt, Germany
* Ruben Niederhagen, Fraunhofer SIT, Darmstadt, Germany
* Richard Petri, Fraunhofer SIT, Darmstadt, Germany
* Simona Samardjiska, Radboud Universiteit, Nijmegen, The Netherlands
### Abstract
> This paper presents an attack based on side-channel information and (ISD) on the code-based Niederreiter cryptosystem and an evaluation of the practicality of the attack using an electromagnetic side channel. We start by directly adapting the timing side-channel plaintext-recovery attack by Shoufan et al. from 2010 to the constant-time implementation of the Niederreiter cryptosystem as used in the official FPGA-implementation of the NIST finalist “Classic McEliece”. We then enhance our attack using ISD and a new technique that we call iterative chunking to further significantly reduce the number of required side-channel measurements. We theoretically show that our attack improvements have a significant impact on reducing the number of required side-channel measurements. For example, for the 256-bit security parameter set kem/mceliece6960119 of “Classic McEliece”, we improve the basic attack that requires 5415 measurements to less than 562 measurements on average to mount a successful plaintext-recovery attack. Further reductions can be achieved at the price of increasing the cost of the ISD computations. We confirm our findings by practically mounting the attack on the official FPGA-implementation of “Classic McEliece” for all proposed parameter sets.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-64837-4_29](https://doi.org/10.1007/978-3-030-64837-4_29)
