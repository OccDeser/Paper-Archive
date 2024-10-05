# Asiacrypt[2023-5]
## Improved Fully Adaptive Decentralized MA-ABE for NC1 from MDDH.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#improved-fully-adaptive-decentralized-ma-abe-for-nc1-from-mddh)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#improved-fully-adaptive-decentralized-ma-abe-for-nc1-from-mddh)
### Authors
* Jie Chen, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Qiaohan Chu, Shanghai Key Laboratory of Trustworthy Computing, Software Engineering Institute, East China Normal University, Shanghai, China
* Ying Gao, School of Cyber Science and Technology, Beihang University, Beijing, China
* Ying Gao, Zhongguancun Laboratory, Beijing, China
* Jianting Ning, College of Computer and Cyberspace Security, Fujian Normal University, Fuzhou, China
* Luping Wang, School of Electronic and Information Engineering, Suzhou University of Science and Technology, Suzhou, China
### Abstract
> We improve the first and the only existing prime-order fully adaptively secure decentralized Multi-Authority Attribute-Based Encryption (MA-ABE) scheme for NC1 in Datta-Komargodski-Waters [Eurocrypt ’23]. Compared with Datta-Komargodski-Waters, our decentralized MA-ABE scheme extra enjoys shorter parameters and meanwhile supports many-use of attribute. Shorter parameters is always the goal for Attribute-Based Encryption (ABE), and many-use of attribute is a native property of decentralized MA-ABE for NC1. Our scheme relies on the Matrix Decision Diffie-Hellman (MDDH) assumption and is in the random oracle model, as Datta-Komargodski-Waters.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_1](https://doi.org/10.1007/978-981-99-8733-7_1)
## Verifiable Decentralized Multi-client Functional Encryption for Inner Product.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#verifiable-decentralized-multi-client-functional-encryption-for-inner-product)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#verifiable-decentralized-multi-client-functional-encryption-for-inner-product)
### Authors
* Dinh Duy Nguyen, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* Duong Hieu Phan, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
* David Pointcheval, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
### Abstract
> Joint computation on encrypted data is becoming increasingly crucial with the rise of cloud computing. In recent years, the development of multi-client functional encryption (MCFE) has made it possible to perform joint computation on private inputs, without any interaction. Well-settled solutions for linear functions have become efficient and secure, but there is still a shortcoming: if one user inputs incorrect data, the output of the function might become meaningless for all other users (while still useful for the malicious user). To address this issue, the concept of verifiable functional encryption was introduced by Badrinarayanan et al. at Asiacrypt ’16 (BGJS). However, their solution was impractical because of strong statistical requirements. More recently, Bell et al. introduced a related concept for secure aggregation, with their ACORN solution, but it requires multiple rounds of interactions between users. In this paper,
> 
> we first propose a computational definition of verifiability for MCFE. Our notion covers the computational version of BGJS and extends it to handle any valid inputs defined by predicates. The BGJS notion corresponds to the particular case of a fixed predicate in our setting;
> 
> we then introduce a new technique called Combine-then-Descend, which relies on the class group. It allows us to construct One-time Decentralized Sum (\(\textsf{ODSUM}\)) on verifiable private inputs. \(\textsf{ODSUM}\) is the building block for our final protocol of a verifiable decentralized MCFE for inner-product, where the inputs are within a range. Our approach notably enables the efficient identification of malicious users, thereby addressing an unsolved problem in ACORN.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_2](https://doi.org/10.1007/978-981-99-8733-7_2)
## Registered ABE via Predicate Encodings.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#registered-abe-via-predicate-encodings)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#registered-abe-via-predicate-encodings)
### Authors
* Ziqi Zhu, East China Normal University, Shanghai, China
* Junqing Gong, East China Normal University, Shanghai, China
* Haifeng Qian, East China Normal University, Shanghai, China
* Kai Zhang, Shanghai University of Electric Power, Shanghai, China
* Junqing Gong, Shanghai Qi Zhi Institute, Shanghai, China
### Abstract
> This paper presents the first generic black-box construction of registered attribute-based encryption (Reg-ABE) via predicate encoding [TCC’14]. The generic scheme is based on k-Lin assumption in the prime-order bilinear group and implies the following concrete schemes that improve existing results:
> 
> the first Reg-ABE scheme for span program in the prime-order group; prior work uses composite-order group;
> 
> the first Reg-ABE scheme for zero inner-product predicate from k-Lin assumption; prior work relies on generic group model (GGM);
> 
> the first Reg-ABE scheme for arithmetic branching program (ABP) which has not been achieved previously.
> 
> Technically, we follow the blueprint of Hohenberger et al. [EUROCRYPT’23] but start from the prime-order dual-system ABE by Chen et al. [EUROCRYPT’15], which transforms a predicate encoding into an ABE. The proof follows the dual-system method in the context of Reg-ABE: we conceptually consider helper keys as secret keys; furthermore, malicious public keys are handled via pairing-based quasi-adaptive non-interactive zero-knowledge argument by Kiltz and Wee [EUROCRYPT’15].

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_3](https://doi.org/10.1007/978-981-99-8733-7_3)
## Registered (Inner-Product) Functional Encryption.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#registered-inner-product-functional-encryption)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#registered-inner-product-functional-encryption)
### Authors
* Danilo Francati, Aarhus University, Aarhus, Denmark
* Daniele Friolo, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Monosij Maitra, Ruhr-Universität Bochum, Bochum, Germany
* Giulio Malavolta, Bocconi University, Milan, Italy
* Monosij Maitra, Max-Planck Institute for Security and Privacy, Bochum, Germany
* Giulio Malavolta, Max-Planck Institute for Security and Privacy, Bochum, Germany
* Ahmadreza Rahimi, Max-Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Registered encryption (Garg et al., TCC’18) is an emerging paradigm that tackles the key-escrow problem associated with identity-based encryption by replacing the private-key generator with a much weaker entity known as the key curator. The key curator holds no secret information, and is responsible to: (i) update the master public key whenever a new user registers its own public key to the system; (ii) provide helper decryption keys to the users already registered in the system, in order to still enable them to decrypt after new users join the system. For practical purposes, tasks (i) and (ii) need to be efficient, in the sense that the size of the public parameters, of the master public key, and of the helper decryption keys, as well as the running times for key generation and user registration, and the number of updates, must be small.
> 
> In this paper, we generalize the notion of registered encryption to the setting of functional encryption (FE).
> 
> As our main contribution, we show an efficient construction of registered FE for the special case of (attribute hiding) inner-product predicates, built over asymmetric bilinear groups of prime order. Our scheme supports a large attribute universe and is proven secure in the bilinear generic group model. We also implement our scheme and experimentally demonstrate the efficiency requirements of the registered settings. Our second contribution is a feasibility result where we build registered FE for based on indistinguishability obfuscation and somewhere statistically binding hash functions.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_4](https://doi.org/10.1007/978-981-99-8733-7_4)
## Robust Decentralized Multi-client Functional Encryption: Motivation, Definition, and Inner-Product Constructions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#robust-decentralized-multi-client-functional-encryption-motivation-definition-and-inner-product-constructions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#robust-decentralized-multi-client-functional-encryption-motivation-definition-and-inner-product-constructions)
### Authors
* Yamin Li, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Xiaofeng Chen, State Key Laboratory of Integrated Service Networks (ISN), Xidian University, Xi’an, 710071, China
* Jianghong Wei, State Key Laboratory of Mathematical Engineering and Advanced Computing, Zhengzhou, 450001, China
* Fuchun Guo, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
* Willy Susilo, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, 2522, Australia
### Abstract
> Decentralized Multi-Client Functional Encryption (DMCFE) is a multi-user extension of Functional Encryption (FE) without relying on a trusted third party. However, a fundamental requirement for DMCFE is that the decryptor must collect the partial functional keys and the ciphertexts from all clients. If one client does not generate the partial functional key or the ciphertext, the decryptor cannot obtain any useful information. We found that this strong requirement limits the application of DMCFE in scenarios such as statistical analysis and machine learning.
> 
> In this paper, we first introduce a new primitive named Robust Decentralized Multi-Client Functional Encryption (RDMCFE), a notion generalized from DMCFE that aims to tolerate the problem of negative clients leading to nothing for the decryptor, where negative clients represent participants that are unable or unwilling to compute the partial functional key or the ciphertext. Conversely, a client is said to be a positive one if it is able and willing to compute both the partial functional key and the ciphertext. In RDMCFE scheme, the positive client set S is known by each positive client such that the generated partial functional keys help to eliminate the influence of negative clients, and the decryptor can learn the function value corresponding to the sensitive data of all positive clients when the cardinality of the set S is not less than a given threshold. We present such constructions for functionalities corresponding to the evaluation of inner products.
> 
> 1. We provide a basic RDMCFE construction through the technique of double-masking structure, which is inspired by the work of Bonawitz et al. (CCS 2017). The storage and communication overheads of the construction are small and independent of the length of the vector. However, in the basic construction, for the security guarantee, one set of secret keys can be used to generate partial functional keys for only one function.
> 
> 2. We show how to design the enhanced construction so that partial functional keys for different functions can be generated with the same set of secret keys, at the cost of increasing storage and communication overheads. Specifically, in the enhanced RDMCFE construction, we protect the mask through a single-input FE scheme and a threshold secret sharing scheme having the additively homomorphic property.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_5](https://doi.org/10.1007/978-981-99-8733-7_5)
## Cuckoo Commitments: Registration-Based Encryption and Key-Value Map Commitments for Large Spaces.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#cuckoo-commitments-registration-based-encryption-and-key-value-map-commitments-for-large-spaces)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#cuckoo-commitments-registration-based-encryption-and-key-value-map-commitments-for-large-spaces)
### Authors
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, Universidad Politénica de Madrid, Madrid, Spain
* Paola de Perthuis, DIENS, École Normale Supérieure, CNRS, Inria, Université PSL, Paris, France
* Paola de Perthuis, Cosmian, Paris, France
### Abstract
> Registration-Based Encryption (RBE) [Garg et al. TCC’18] is a public-key encryption mechanism in which users generate their own public and secret keys, and register their public keys with a central authority called the key curator. Similarly to Identity-Based Encryption (IBE), in RBE users can encrypt by only knowing the public parameters and the public identity of the recipient. Unlike IBE, though, RBE does not suffer the key escrow problem—one of the main obstacles of IBE’s adoption in practice—since the key curator holds no secret.
> 
> In this work, we put forward a new methodology to construct RBE schemes that support large users identities (i.e., arbitrary strings). Our main result is the first efficient pairing-based RBE for large identities. Prior to our work, the most efficient RBE is that of [Glaeser et al. ePrint’22] which only supports small identities. The only known RBE schemes with large identities are realized either through expensive non-black-box techniques (ciphertexts of 3.6 TB for 1000 users), via a specialized lattice-based construction [Döttling et al. Eurocrypt’23] (ciphertexts of 2.4 GB), or through the more complex notion of Registered Attribute-Based Encryption [Hohenberger et al. Eurocrypt’23]. By unlocking the use of pairings for RBE with large identity space, we enable a further improvement of three orders of magnitude, as our ciphertexts for a system with 1000 users are 1.7 MB.
> 
> The core technique of our approach is a novel use of cuckoo hashing in cryptography that can be of independent interest. We give two main applications. The first one is the aforementioned RBE methodology, where we use cuckoo hashing to compile an RBE with small identities into one for large identities. The second one is a way to convert any vector commitment scheme into a key-value map commitment. For instance, this leads to the first algebraic pairing-based key-value map commitments.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_6](https://doi.org/10.1007/978-981-99-8733-7_6)
## Lattice-Based Functional Commitments: Fast Verification and Cryptanalysis.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#lattice-based-functional-commitments-fast-verification-and-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#lattice-based-functional-commitments-fast-verification-and-cryptanalysis)
### Authors
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### Abstract
> A functional commitment allows a user to commit to an input \(\textbf{x}\in \{0,1\}^\ell \) and later open up the commitment to a value \(y = f(\textbf{x})\) with respect to some function f. In this work, we focus on schemes that support fast verification. Specifically, after a preprocessing step that depends only on f, the verification time as well as the size of the commitment and opening should be sublinear in the input length \(\ell \), We also consider the dual setting where the user commits to the function f and later, opens up the commitment at an input \(\textbf{x}\).
> 
> In this work, we develop two (non-interactive) functional commitments that support fast verification. The first construction supports openings to constant-degree polynomials and has a shorter CRS for a broad range of settings compared to previous constructions. Our second construction is a dual functional commitment for arbitrary bounded-depth Boolean circuits that supports fast verification with security from falsifiable assumptions. Both schemes are lattice-based and avoid non-black-box use of cryptographic primitives or lattice sampling algorithms. Security of both constructions rely on the \(\ell \)-succinct short integer solutions (SIS) assumption, a falsifiable q-type generalization of the SIS assumption (Preprint 2023).
> 
> In addition, we study the challenges of extending lattice-based functional commitments to extractable functional commitments, a notion that is equivalent to succinct non-interactive arguments (when considering openings to quadratic relations). We describe a general methodology that heuristically breaks the extractability of our construction and provides evidence for the implausibility of the knowledge k-R-\(\textsf{ISIS}\) assumption of Albrecht et al. (CRYPTO 2022) that was used in several constructions of lattice-based succinct arguments. If we additionally assume hardness of the standard inhomogeneous SIS assumption, we obtain a direct attack on a variant of the extractable linear functional commitment of Albrecht et al.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_7](https://doi.org/10.1007/978-981-99-8733-7_7)
## Non-interactive Zero-Knowledge Functional Proofs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#non-interactive-zero-knowledge-functional-proofs)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#non-interactive-zero-knowledge-functional-proofs)
### Authors
* Gongxian Zeng, Peng Cheng Laboratory, Shenzhen, China
* Zhengan Huang, Peng Cheng Laboratory, Shenzhen, China
* Junzuo Lai, College of Information Science and Technology, Jinan University, Guangzhou, China
* Jian Weng, College of Information Science and Technology, Jinan University, Guangzhou, China
* Linru Zhang, Nanyang Technological University, Singapore, Singapore
* Xiangning Wang, Nanyang Technological University, Singapore, Singapore
* Kwok-Yan Lam, Nanyang Technological University, Singapore, Singapore
* Huaxiong Wang, Nanyang Technological University, Singapore, Singapore
### Abstract
> In this paper, we consider to generalize NIZK by empowering a prover to share a witness in a fine-grained manner with verifiers. Roughly, the prover is able to authorize a verifier to obtain extra information of witness, i.e., besides verifying the truth of the statement, the verifier can additionally obtain certain function of the witness from the accepting proof using a secret functional key provided by the prover.
> 
> To fulfill these requirements, we introduce a new primitive called non-interactive zero-knowledge functional proofs (fNIZKs), and formalize its security notions. We provide a generic construction of fNIZK for any \({\textsf{NP}}\) relation \(\mathcal {R}\), which enables the prover to share any function of the witness with a verifier. For a widely-used relation about set membership proof (implying range proof), we construct a concrete and efficient fNIZK, through new building blocks (set membership encryption and dual inner-product encryption), which might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_8](https://doi.org/10.1007/978-981-99-8733-7_8)
## Zero-Knowledge Functional Elementary Databases.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#zero-knowledge-functional-elementary-databases)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#zero-knowledge-functional-elementary-databases)
### Authors
* Xinxuan Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Yi Deng, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xinxuan Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yi Deng, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> Zero-knowledge elementary databases (ZK-EDBs) enable a prover to commit a database D of key-value (x, v) pairs and later provide a convincing answer to the query “send me the value D(x) associated with x” without revealing any extra knowledge (including the size of D). After its introduction, several works extended it to allow more expressive queries, but the expressiveness achieved so far is still limited: only a relatively simple queries–range queries over the keys and values– can be handled by known constructions.
> 
> In this paper we introduce a new notion called zero knowledge functional elementary databases (ZK-FEDBs), which allows the most general functional queries. Roughly speaking, for any Boolean circuit f, ZK-FEDBs allows the ZK-EDB prover to provide convincing answers to the queries of the form “send me all records (x, v) in D satisfying \(f(x,v)=1\),” without revealing any extra knowledge (including the size of D). We present a construction of ZK-FEDBs in the random oracle model and generic group model, whose proof size is only linear in the length of record and the size of query circuit, and is independent of the size of input database D.
> 
> Our technical contribution is two-fold. Firstly, we introduce a new variant of zero-knowledge sets (ZKS) which supports combined operations on sets, and present a concrete construction that is based on groups with unknown order. Secondly, we develop a transformation that transforms the query of Boolean circuit into a query of combined operations on related sets, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_9](https://doi.org/10.1007/978-981-99-8733-7_9)
## WhatsUpp with Sender Keys? Analysis, Improvements and Security Proofs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#whatsupp-with-sender-keys-analysis-improvements-and-security-proofs)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#whatsupp-with-sender-keys-analysis-improvements-and-security-proofs)
### Authors
* David Balbás, IMDEA Software Institute, Madrid, Spain
* David Balbás, Universidad Politécnica de Madrid, Madrid, Spain
* Daniel Collins, EPFL, Lausanne, Switzerland
* Phillip Gajland, Max Planck Institute for Security and Privacy, Bochum, Germany
* Phillip Gajland, Ruhr University Bochum, Bochum, Germany
### Abstract
> Developing end-to-end encrypted instant messaging solutions for group conversations is an ongoing challenge that has garnered significant attention from practitioners and the cryptographic community alike. Notably, industry-leading messaging apps such as WhatsApp and Signal Messenger have adopted the Sender Keys protocol, where each group member shares their own symmetric encryption key with others Despite its widespread adoption, Sender Keys has never been formally modelled in the cryptographic literature, raising the following natural question:
> 
> What can be proven about the security of the Sender Keys protocol, and how can we practically mitigate its shortcomings?
> 
> In addressing this question, we first introduce a novel security model to suit protocols like Sender Keys, deviating from conventional group key agreement-based abstractions. Our framework allows for a natural integration of two-party messaging within group messaging sessions that may be of independent interest. Leveraging this framework, we conduct the first formal analysis of the Sender Keys protocol, and prove it satisfies a weak notion of security. Towards improving security, we propose a series of efficient modifications to Sender Keys without imposing significant performance overhead. We combine these refinements into a new protocol that we call Sender Keys+, which may be of interest both in theory and practice.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_10](https://doi.org/10.1007/978-981-99-8733-7_10)
## Efficient Updatable Public-Key Encryption from Lattices.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#efficient-updatable-public-key-encryption-from-lattices)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#efficient-updatable-public-key-encryption-from-lattices)
### Authors
* Calvin Abou Haidar, ENS de Lyon, Lyon, France
* Alain Passelègue, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Calvin Abou Haidar, INRIA, Paris, France
* Alain Passelègue, INRIA, Paris, France
* Alain Passelègue, CryptoLab Inc, Lyon, France
* Damien Stehlé, CryptoLab Inc, Lyon, France
### Abstract
> Updatable public key encryption has recently been introduced as a solution to achieve forward-security in the context of secure group messaging without hurting efficiency, but so far, no efficient lattice-based instantiation of this primitive is known.
> 
> In this work, we construct the first LWE-based UPKE scheme with polynomial modulus-to-noise rate, which is CPA-secure in the standard model. At the core of our security analysis is a generalized reduction from the standard LWE problem to (a stronger version of) the Extended LWE problem. We further extend our construction to achieve stronger security notions by proposing two generic transforms. Our first transform allows to obtain CCA security in the random oracle model and adapts the Fujisaki-Okamoto transform to the UPKE setting. Our second transform allows to achieve security against malicious updates by adding a NIZK argument in the update mechanism. In the process, we also introduce the notion of Updatable Key Encapsulation Mechanism (UKEM), as the updatable variant of KEMs. Overall, we obtain a CCA-secure UKEM in the random oracle model whose ciphertext sizes are of the same order of magnitude as that of CRYSTALS-Kyber.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_11](https://doi.org/10.1007/978-981-99-8733-7_11)
## CCA-1 Secure Updatable Encryption with Adaptive Security.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#cca-1-secure-updatable-encryption-with-adaptive-security)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#cca-1-secure-updatable-encryption-with-adaptive-security)
### Authors
* Huanhuan Chen, Delft University of Technology, Delft, The Netherlands
* Kaitai Liang, Delft University of Technology, Delft, The Netherlands
* Yao Jiang Galteland, Qredo, London, UK
### Abstract
> Updatable encryption (UE) enables a cloud server to update ciphertexts using client-generated tokens. There are two types of UE: ciphertext-independent (c-i) and ciphertext-dependent (c-d). In terms of construction and efficiency, c-i UE utilizes a single token to update all ciphertexts. The update mechanism relies mainly on the homomorphic properties of exponentiation, which limits the efficiency of encryption and updating. Although c-d UE may seem inconvenient as it requires downloading parts of the ciphertexts during token generation, it allows for easy implementation of the Dec-then-Enc structure. This methodology significantly simplifies the construction of the update mechanism. Notably, the c-d UE scheme proposed by Boneh et al. (ASIACRYPT’20) has been reported to be 200 times faster than prior UE schemes based on DDH hardness, which is the case for most existing c-i UE schemes. Furthermore, c-d UE ensures a high level of security as the token does not reveal any information about the key, which is difficult for c-i UE to achieve. However, previous security studies on c-d UE only addressed selective security; the studies for adaptive security remain an open problem.
> 
> In this study, we make three significant contributions to ciphertext-dependent updatable encryption (c-d UE). Firstly, we provide stronger security notions compared to previous work, which capture adaptive security and also consider the adversary’s decryption capabilities under the adaptive corruption setting. Secondly, we propose a new c-d UE scheme that achieves the proposed security notions. The token generation technique significantly differs from the previous Dec-then-Enc structure, while still preventing key leakages. At last, we introduce a packing technique that enables the simultaneous encryption and updating of multiple messages within a single ciphertext. This technique helps alleviate the cost of c-d UE by reducing the need to download partial ciphertexts during token generation.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_12](https://doi.org/10.1007/978-981-99-8733-7_12)
## Distributed Broadcast Encryption from Bilinear Groups.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-5].md#distributed-broadcast-encryption-from-bilinear-groups)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-5].md#distributed-broadcast-encryption-from-bilinear-groups)
### Authors
* Dimitris Kolonelos, IMDEA Software Institute, Madrid, Spain
* Dimitris Kolonelos, Universidad Politécnica de Madrid, Madrid, Spain
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Hoeteck Wee, NTT Research, Palo Alto, CA, USA
* Hoeteck Wee, École Normale Supérieure - PSL, Paris, France
### Abstract
> Distributed broadcast encryption (DBE) improves on the traditional notion of broadcast encryption by eliminating the key-escrow problem: In a DBE system, users generate their own secret keys non-interactively without the help of a trusted party. Then anyone can broadcast a message for a subset S of the users, in such a way that the resulting ciphertext size is sublinear in (and, ideally, independent of) |S|. Unfortunately, the only known constructions of DBE requires heavy cryptographic machinery, such as general-purpose indistinguishability obfuscation, or come without a security proof.
> 
> In this work, we formally show that obfuscation is not necessary for DBE, and we present two practical DBE schemes from standard assumptions in prime-order bilinear groups. Our constructions are conceptually simple, satisfy the strong notion of adaptive security, and are concretely efficient. In fact, their performance, in terms of number of group elements and efficiency of the algorithms, is comparable with that of traditional (non distributed) broadcast encryption schemes from bilinear groups.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8733-7_13](https://doi.org/10.1007/978-981-99-8733-7_13)
