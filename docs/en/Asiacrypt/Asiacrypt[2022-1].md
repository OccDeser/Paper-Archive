# Asiacrypt[2022-1]
## Full Quantum Equivalence of Group Action DLog and CDH, and More.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#full-quantum-equivalence-of-group-action-dlog-and-cdh-and-more)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#full-quantum-equivalence-of-group-action-dlog-and-cdh-and-more)
### Authors
* Hart Montgomery, Linux Foundation, San Francisco, USA
* Mark Zhandry, NTT Research and Princeton University, Princeton, USA
### Abstract
> Cryptographic group actions are a relaxation of standard cryptographic groups that have less structure. This lack of structure allows them to be plausibly quantum resistant despite Shor’s algorithm, while still having a number of applications. The most famous example of group actions are built from isogenies on elliptic curves.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_1](https://doi.org/10.1007/978-3-031-22963-3_1)
## Cryptographic Primitives with Hinting Property.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#cryptographic-primitives-with-hinting-property)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#cryptographic-primitives-with-hinting-property)
### Authors
* Navid Alamati, VISA Research, Palo Alto, USA
* Sikhar Patranabis, IBM Research India, Bangalore, India
### Abstract
> A hinting PRG is a (potentially) stronger variant of PRG with a “deterministic” form of circular security with respect to the seed of the PRG (Koppula and Waters, CRYPTO 2019). Hinting PRGs enable many cryptographic applications, most notably CCA-secure public-key encryption and trapdoor functions. In this paper, we study cryptographic primitives with the hinting property, yielding the following results:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_2](https://doi.org/10.1007/978-3-031-22963-3_2)
## SwiftEC: Shallue-van de Woestijne Indifferentiable Function to Elliptic Curves - Faster Indifferentiable Hashing to Elliptic Curves.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#swiftec-shallue-van-de-woestijne-indifferentiable-function-to-elliptic-curves-faster-indifferentiable-hashing-to-elliptic-curves)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#swiftec-shallue-van-de-woestijne-indifferentiable-function-to-elliptic-curves-faster-indifferentiable-hashing-to-elliptic-curves)
### Authors
* Jorge Chavez-Saab, Computer Science Department, Cinvestav IPN, Mexico City, Mexico
* Francisco Rodríguez-Henríquez, Computer Science Department, Cinvestav IPN, Mexico City, Mexico
* Jorge Chavez-Saab, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
* Francisco Rodríguez-Henríquez, Cryptography Research Centre, Technology Innovation Institute, Abu Dhabi, United Arab Emirates
* Mehdi Tibouchi, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> Hashing arbitrary values to points on an elliptic curve is a required step in many cryptographic constructions, and a number of techniques have been proposed to do so over the years. One of the first ones was due to Shallue and van de Woestijne (ANTS-VII), and it had the interesting property of applying to essentially all elliptic curves over finite fields. It did not, however, have the desirable property of being indifferentiable from a random oracle when composed with a random oracle to the base field.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_3](https://doi.org/10.1007/978-3-031-22963-3_3)
## Multi-Client Functional Encryption with Fine-Grained Access Control.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#multi-client-functional-encryption-with-fine-grained-access-control)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#multi-client-functional-encryption-with-fine-grained-access-control)
### Authors
* Ky Nguyen, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* David Pointcheval, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Duong Hieu Phan, LTCI, Telecom Paris, Institut Polytechnique de Paris, Palaiseau, France
### Abstract
> Multi-Client Functional Encryption (\(\textsf {MCFE}\)) and Multi-Input Functional Encryption (\(\textsf {MIFE}\)) are very interesting extensions of Functional Encryption for practical purpose. They allow to compute joint function over data from multiple parties. Both primitives are aimed at applications in multi-user settings where decryption can be correctly output for users with appropriate functional decryption keys only. While the definitions for a single user or multiple users were quite general and can be realized for general classes of functions as expressive as Turing machines or all circuits, efficient schemes have been proposed so far for concrete classes of functions: either only for access control, i.e. the identity function under some conditions, or linear/quadratic functions under no condition.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_4](https://doi.org/10.1007/978-3-031-22963-3_4)
## Compact FE for Unbounded Attribute-Weighted Sums for Logspace from SXDH.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#compact-fe-for-unbounded-attribute-weighted-sums-for-logspace-from-sxdh)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#compact-fe-for-unbounded-attribute-weighted-sums-for-logspace-from-sxdh)
### Authors
* Pratish Datta, NTT Research, Inc., Sunnyvale, CA, 94085, USA
* Tapas Pal, NTT Social Informatics Laboratories, Musashino-shi, Tokyo, 180-8585, Japan
* Katsuyuki Takashima, Waseda University, Shinjuku-ku, Tokyo, 169-8050, Japan
### Abstract
> This paper presents the first functional encryption \((\textsf{FE})\) scheme for the attribute-weighted sum \((\textsf{AWS})\) functionality that supports the uniform model of computation. In such an \(\textsf{FE}\) scheme, encryption takes as input a pair of attributes (x, z) where the attribute x is public while the attribute z is private. A secret key corresponds to some weight function f, and decryption recovers the weighted sum f(x)z. This is an important functionality with a wide range of potential real life applications, many of which require the attribute lengths to be flexible rather than being fixed at system setup. In the proposed scheme, the public attributes are considered as binary strings while the private attributes are considered as vectors over some finite field, both having arbitrary polynomial lengths that are not fixed at system setup. The weight functions are modelled as Logspace Turing machines.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_5](https://doi.org/10.1007/978-3-031-22963-3_5)
## Collusion-Resistant Functional Encryption for RAMs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#collusion-resistant-functional-encryption-for-rams)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#collusion-resistant-functional-encryption-for-rams)
### Authors
* Prabhanjan Ananth, UC Santa Barbara, Santa Barbara, CA, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Xiong Fan, Rutgers University, Piscataway, NJ, USA
* Luowen Qian, Boston University, Boston, MA, USA
### Abstract
> In recent years, functional encryption (FE) has established itself as one of the fundamental primitives in cryptography. The choice of model of computation to represent the functions associated with the functional keys plays a critical role in the complexity of the algorithms of an FE scheme. Historically, the functions are represented as circuits. However, this results in the decryption time of the FE scheme growing proportional to not only the worst case running time of the function but also the size of the input, which in many applications can be quite large.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_6](https://doi.org/10.1007/978-3-031-22963-3_6)
## Witness Encryption and Null-IO from Evasive LWE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#witness-encryption-and-null-io-from-evasive-lwe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#witness-encryption-and-null-io-from-evasive-lwe)
### Authors
* Vinod Vaikuntanathan, MIT CSAIL, Cambridge, USA
* Hoeteck Wee, NTT Research, Sunnyvale, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
* Daniel Wichs, Northeastern University, Boston, USA
### Abstract
> Witness encryption (WE) allows us to use an arbitrary NP statement x as a public key to encrypt a message, and the witness w serves as a decryption key. Security ensures that, when the statement x is false, the encrypted message remains computationally hidden. WE appears to be significantly weaker than indistinguishability obfuscation (iO). Indeed, WE is closely related to a highly restricted form of iO that only guarantees security for null circuits (null iO). However, all current approaches towards constructing WE under nice assumptions go through iO. Such constructions are quite complex and are unlikely to lead to practically instantiable schemes. In this work, we revisit a very simple WE and null iO candidate of Chen, Vaikuntanathan and Wee (CRYPTO 2018). We show how to prove its security under a nice and easy-to-state assumption that we refer to as evasive LWE following Wee (EUROCRYPT 2022). Roughly speaking, the evasive LWE assumption says the following: assume we have some joint distributions over matrices \(\textbf{P}\), \(\textbf{S}\) and auxiliary information \(\textsf{aux}\) such that

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_7](https://doi.org/10.1007/978-3-031-22963-3_7)
## Algebraic Meet-in-the-Middle Attack on LowMC.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#algebraic-meet-in-the-middle-attack-on-lowmc)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#algebraic-meet-in-the-middle-attack-on-lowmc)
### Authors
* Fukang Liu, University of Hyogo, Hyogo, Japan
* Takanori Isobe, University of Hyogo, Hyogo, Japan
* Takanori Isobe, National Institute of Information and Communications Technology, Tokyo, Japan
* Takanori Isobe, PRESTO, Japan Science and Technology Agency, Tokyo, Japan
* Santanu Sarkar, Indian Institute of Technology Madras, Chennai, India
* Gaoli Wang, East China Normal University, Shanghai, China
* Gaoli Wang, Key Lab of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Willi Meier, FHNW, Windisch, Switzerland
### Abstract
> By exploiting the feature of partial nonlinear layers, we propose a new technique called algebraic meet-in-the-middle (MITM) attack to analyze the security of LowMC, which can reduce the memory complexity of the simple difference enumeration attack over the state-of-the-art. Moreover, while an efficient algebraic technique to retrieve the full key from a differential trail of LowMC has been proposed at CRYPTO 2021, its time complexity is still exponential in the key size. In this work, we show how to reduce it to constant time when there are a sufficiently large number of active S-boxes in the trail. With the above new techniques, the attacks on LowMC and LowMC-M published at CRYPTO 2021 are further improved, and some LowMC instances could be broken for the first time. Our results seem to indicate that partial nonlinear layers are still not well-understood.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_8](https://doi.org/10.1007/978-3-031-22963-3_8)
## Latin Dances Reloaded: Improved Cryptanalysis Against Salsa and ChaCha, and the Proposal of Forró.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#latin-dances-reloaded-improved-cryptanalysis-against-salsa-and-chacha-and-the-proposal-of-forr)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#latin-dances-reloaded-improved-cryptanalysis-against-salsa-and-chacha-and-the-proposal-of-forr)
### Authors
* Murilo Coutinho, Electrical Engineering Department (ENE), Technology College, University of Brasília, Brasília, Brazil
* Iago Passos, Electrical Engineering Department (ENE), Technology College, University of Brasília, Brasília, Brazil
* Fábio L. L. de Mendonça, Electrical Engineering Department (ENE), Technology College, University of Brasília, Brasília, Brazil
* Rafael Timteo de Sousa Jr., Electrical Engineering Department (ENE), Technology College, University of Brasília, Brasília, Brazil
* Juan C. Grados Vásquez, Technology Innovation Institute, Abu Dhabi, UAE
* Fábio Borges, National Laboratory for Scientific Computing, Petrópolis, Brazil
### Abstract
> In this paper, we present 4 major contributions to ARX ciphers and in particular to the Salsa/ChaCha family of stream ciphers:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_9](https://doi.org/10.1007/978-3-031-22963-3_9)
## Mind the TWEAKEY Schedule: Cryptanalysis on SKINNYe-64-256.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#mind-the-tweakey-schedule-cryptanalysis-on-skinnye-64-256)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#mind-the-tweakey-schedule-cryptanalysis-on-skinnye-64-256)
### Authors
* Lingyue Qin, BNRist, Tsinghua University, Beijing, China
* Xiaoyang Dong, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Jialiang Hua, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
* Anyu Wang, Shangdong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Shangdong Institute of Blockchain, Jinan, China
* Lingyue Qin, Zhongguancun Laboratory, Beijing, China
* Xiaoyang Dong, Zhongguancun Laboratory, Beijing, China
* Anyu Wang, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Lingyue Qin, National Financial Cryptography Research Center, Beijing, China
* Xiaoyang Dong, National Financial Cryptography Research Center, Beijing, China
* Anyu Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
### Abstract
> Designing symmetric ciphers for particular applications becomes a hot topic. At EUROCRYPT 2020, Naito, Sasaki and Sugawara invented the threshold implementation friendly cipher SKINNYe-64-256 to meet the requirement of the authenticated encryption PFB \(\_\)Plus. Soon, Thomas Peyrin pointed out that SKINNYe-64-256 may lose the security expectation due the new tweakey schedule. Although the security issue of SKINNYe-64-256 is still unclear, Naito et al. decided to introduce SKINNYe-64-256 v2 as a response.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_10](https://doi.org/10.1007/978-3-031-22963-3_10)
## Enhancing Differential-Neural Cryptanalysis.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#enhancing-differential-neural-cryptanalysis)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#enhancing-differential-neural-cryptanalysis)
### Authors
* Zhenzhen Bao, Institute for Network Sciences and Cyberspace, BNRist, Tsinghua University, Beijing, China
* Zhenzhen Bao, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Jian Guo, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Yi Tu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Meicheng Liu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Li Ma, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhenzhen Bao, Zhongguancun Laboratory, Beijing, China
### Abstract
> In CRYPTO 2019, Gohr shows that well-trained neural networks can perform cryptanalytic distinguishing tasks superior to traditional differential distinguishers. Moreover, applying an unorthodox key guessing strategy, an 11-round key-recovery attack on a modern block cipher Speck32/64 improves upon the published state-of-the-art result. This calls into the next questions. To what extent is the advantage of machine learning (ML) over traditional methods, and whether the advantage generally exists in the cryptanalysis of modern ciphers? To answer the first question, we devised ML-based key-recovery attacks on more extended round-reduced Speck32/64. We achieved an improved 12-round and the first practical 13-round attacks. The essential for the new results is enhancing a classical component in the ML-based attacks, that is, the neutral bits. To answer the second question, we produced various neural distinguishers on round-reduced Simon32/64 and provided comparisons with their pure differential-based counterparts.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_11](https://doi.org/10.1007/978-3-031-22963-3_11)
## Towards Tight Security Bounds for OMAC, XCBC and TMAC.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#towards-tight-security-bounds-for-omac-xcbc-and-tmac)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#towards-tight-security-bounds-for-omac-xcbc-and-tmac)
### Authors
* Soumya Chattopadhyay, Indian Statistical Institute, Kolkata, India
* Mridul Nandi, Indian Statistical Institute, Kolkata, India
* Ashwin Jha, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> OMAC  — a single-keyed variant of CBC-MAC by Iwata and Kurosawa  — is a widely used and standardized (NIST FIPS 800-38B, ISO/IEC 29167-10:2017) message authentication code (MAC) algorithm. The best security bound for OMAC is due to Nandi who proved that OMAC ’s pseudorandom function (PRF) advantage is upper bounded by \( O(q^2\ell /2^n) \), where n, q, and \( \ell \), denote the block size of the underlying block cipher, the number of queries, and the maximum permissible query length (in terms of n-bit blocks), respectively. In contrast, there is no attack with matching lower bound. Indeed, the best known attack on OMAC is the folklore birthday attack achieving a lower bound of \( \varOmega (q^2/2^n) \). In this work, we close this gap for a large range of message lengths. Specifically, we show that OMAC ’s PRF security is upper bounded by \( O(q^2/2^n + q\ell ^2/2^n)\). In practical terms, this means that for a 128-bit block cipher, and message lengths up to 64 GB, OMAC can process up to \( 2^{64} \) messages before rekeying (same as the birthday bound). In comparison, the previous bound only allows \( 2^{48} \) messages. As a side-effect of our proof technique, we also derive similar tight security bounds for XCBC (by Black and Rogaway) and TMAC (by Kurosawa and Iwata). As a direct consequence of this work, we have established tight security bounds (in a wide range of \(\ell \)) for all the CBC-MAC variants, except for the original CBC-MAC.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_12](https://doi.org/10.1007/978-3-031-22963-3_12)
## A Modular Approach to the Security Analysis of Two-Permutation Constructions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#a-modular-approach-to-the-security-analysis-of-two-permutation-constructions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#a-modular-approach-to-the-security-analysis-of-two-permutation-constructions)
### Authors
* Yu Long Chen, imec-COSIC, KU Leuven, Leuven, Belgium
### Abstract
> Constructions based on two public permutation calls are very common in today’s cryptographic community. However, each time a new construction is introduced, a dedicated proof must be carried out to study the security of the construction. In this work, we propose a new tool to analyze the security of these constructions in a modular way. This tool is built on the idea of the classical mirror theory for block cipher based constructions, such that it can be used for security proofs in the ideal permutation model. We present different variants of this public permutation mirror theory such that it is suitable for different security notions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_13](https://doi.org/10.1007/978-3-031-22963-3_13)
## Optimizing Rectangle Attacks: A Unified and Generic Framework for Key Recovery.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#optimizing-rectangle-attacks-a-unified-and-generic-framework-for-key-recovery)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#optimizing-rectangle-attacks-a-unified-and-generic-framework-for-key-recovery)
### Authors
* Ling Song, College of Cyber Security, Jinan University, Guangzhou, China
* Jian Weng, College of Cyber Security, Jinan University, Guangzhou, China
* Nana Zhang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Qianqian Yang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Danping Shi, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Jiahao Zhao, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Lei Hu, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ling Song, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Jian Weng, National Joint Engineering Research Center of Network Security Detection and Protection Technology, Jinan University, Guangzhou, China
* Jian Weng, Guangdong Key Laboratory of Data Security and Privacy Preserving, Jinan University, Guangzhou, China
* Nana Zhang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Qianqian Yang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Danping Shi, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Jiahao Zhao, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Lei Hu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
### Abstract
> The rectangle attack has shown to be a very powerful form of cryptanalysis against block ciphers. Given a rectangle distinguisher, one expects to mount key recovery attacks as efficiently as possible. In the literature, there have been four algorithms for rectangle key recovery attacks. However, their performance vary from case to case. Besides, numerous are the applications where the attacks lack optimality. In this paper, we investigate the rectangle key recovery in depth and propose a unified and generic key recovery algorithm, which supports any possible attacking parameters. Notably, it not only covers the four previous rectangle key recovery algorithms, but also unveils five types of new attacks which were missed previously. Along with the new key recovery algorithm, we propose a framework for automatically finding the best attacking parameters, with which the time complexity of the rectangle attack will be minimized using the new algorithm. To demonstrate the efficiency of the new key recovery algorithm, we apply it to Serpent, CRAFT, SKINNY and Deoxys-BC-256 based on existing distinguishers and obtain a series of improved rectangle attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_14](https://doi.org/10.1007/978-3-031-22963-3_14)
## Random Sources in Private Computation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#random-sources-in-private-computation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#random-sources-in-private-computation)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Adi Rosén, CNRS, FILOFOCS, Tel Aviv, Israel
### Abstract
> We consider multi-party information-theoretic private computation. Such computation inherently requires the use of local randomness by the parties, and the question of minimizing the total number of random bits used for given private computations has received considerable attention in the literature, see, e.g., [5, 9, 14, 16, 17, 19, 21, 26].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_15](https://doi.org/10.1007/978-3-031-22963-3_15)
## Non-interactive Secure Computation of Inner-Product from LPN and LWE.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#non-interactive-secure-computation-of-inner-product-from-lpn-and-lwe)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#non-interactive-secure-computation-of-inner-product-from-lpn-and-lwe)
### Authors
* Geoffroy Couteau, CNRS, IRIF, Université Paris Cité, Paris, France
* Maryam Zarezadeh, Barkhausen Institut, Dresden, Germany
### Abstract
> We put forth a new cryptographic primitive for securely computing inner-products in a scalable, non-interactive fashion: any party can broadcast a public (computationally hiding) encoding of its input, and store a secret state. Given their secret state and the other party’s public encoding, any pair of parties can non-interactively compute additive shares of the inner-product between the encoded vectors.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_16](https://doi.org/10.1007/978-3-031-22963-3_16)
## Efficient Adaptively-Secure Byzantine Agreement for Long Messages.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#efficient-adaptively-secure-byzantine-agreement-for-long-messages)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#efficient-adaptively-secure-byzantine-agreement-for-long-messages)
### Authors
* Amey Bhangale, UC Riverside, Riverside, USA
* Chen-Da Liu-Zhang, NTT Research, Sunnyvale, USA
* Julian Loss, CISPA Helmholtz Center, Saarbrücken, Germany
* Kartik Nayak, Duke University, Durham, USA
### Abstract
> We investigate the communication complexity of Byzantine agreement protocols for long messages against an adaptive adversary. In this setting, prior n-party protocols either achieved a communication complexity of \(O(nl\cdot \textsf{poly}(\kappa ))\) or \(O(nl + n^2 \cdot \textsf{poly}(\kappa ))\) for l-bit long messages and security parameter \(\kappa \). We improve the state of the art by presenting protocols with communication complexity \(O(nl + n \cdot \textsf{poly}(\kappa ))\) in both the synchronous and asynchronous communication models. The synchronous protocol tolerates \(t \le (1-\varepsilon ) \frac{n}{2}\) corruptions and assumes a VRF setup, while the asynchronous protocol tolerates \(t \le (1-\varepsilon ) \frac{n}{3}\) corruptions under further cryptographic assumptions. Our protocols are very simple and combine subcommittee election with the recent approach of Nayak et al. (DISC ‘20). Surprisingly, the analysis of our protocols is all but simple and involves an interesting new application of Mc Diarmid’s inequality to obtain almost optimal corruption thresholds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_17](https://doi.org/10.1007/978-3-031-22963-3_17)
## Concurrently Composable Non-interactive Secure Computation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#concurrently-composable-non-interactive-secure-computation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#concurrently-composable-non-interactive-secure-computation)
### Authors
* Andrew Morgan, Cornell University, Ithaca, USA
* Rafael Pass, Cornell Tech, New York, USA
### Abstract
> We consider the feasibility of non-interactive secure two-party computation (NISC) in the plain model satisfying the notion of superpolynomial-time simulation (SPS). While stand-alone secure SPS-NISC protocols are known from standard assumptions (Badrinarayanan et al., Asiacrypt 2017), it has remained an open problem to construct a concurrently composable SPS-NISC. Prior to our work, the best protocols require 5 rounds (Garg et al., Eurocrypt 2017), or 3 simultaneous-message rounds (Badrinarayanan et al., TCC 2017).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_18](https://doi.org/10.1007/978-3-031-22963-3_18)
## Attaining GOD Beyond Honest Majority with Friends and Foes.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#attaining-god-beyond-honest-majority-with-friends-and-foes)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#attaining-god-beyond-honest-majority-with-friends-and-foes)
### Authors
* Aditya Hegde, Johns Hopkins University, Baltimore, USA
* Nishat Koti, Indian Institute of Science, Bangalore, Bengaluru, India
* Varsha Bhat Kukkala, Indian Institute of Science, Bangalore, Bengaluru, India
* Shravani Patil, Indian Institute of Science, Bangalore, Bengaluru, India
* Arpita Patra, Indian Institute of Science, Bangalore, Bengaluru, India
* Protik Paul, Indian Institute of Science, Bangalore, Bengaluru, India
### Abstract
> In the classical notion of multiparty computation (MPC), an honest party learning private inputs of others, either as a part of protocol specification or due to a malicious party’s unspecified messages, is not considered a potential breach. Several works in the literature exploit this seemingly minor loophole to achieve the strongest security of guaranteed output delivery via a trusted third party, which nullifies the purpose of MPC. Alon et al. (CRYPTO 2020) presented the notion of Friends and Foes (\(\texttt{FaF}\)) security, which accounts for such undesired leakage towards honest parties by modelling them as semi-honest (friends) who do not collude with malicious parties (foes). With real-world applications in mind, it’s more realistic to assume parties are semi-honest rather than completely honest, hence it is imperative to design efficient protocols conforming to the \(\texttt{FaF}\) security model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_19](https://doi.org/10.1007/978-3-031-22963-3_19)
## Towards Practical Topology-Hiding Computation.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#towards-practical-topology-hiding-computation)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#towards-practical-topology-hiding-computation)
### Authors
* Shuaishuai Li, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100093, China
* Shuaishuai Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### Abstract
> Topology-hiding computation (THC) enables n parties to perform a secure multiparty computation (MPC) protocol in an incomplete communication graph while keeping the communication graph hidden. The work of Akavia et al. (CRYPTO 2017 and JoC 2020) shown that THC is feasible for any graph. In this work, we focus on the efficiency of THC and give improvements for various tasks including broadcast, sum and general computation. We mainly consider THC on undirected cycles, but we also give two results for THC on general graphs. All of our results are derived in the presence of a passive adversary statically corrupting any number of parties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_20](https://doi.org/10.1007/978-3-031-22963-3_20)
## Key-Schedule Security for the TLS 1.3 Standard.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#key-schedule-security-for-the-tls-1-3-standard)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#key-schedule-security-for-the-tls-1-3-standard)
### Authors
* Chris Brzuska, Aalto University, Espoo, Finland
* Konrad Kohbrok, Aalto University, Espoo, Finland
* Antoine Delignat-Lavaud, Microsoft Research Cambridge, Cambridge, UK
* Cédric Fournet, Microsoft Research Cambridge, Cambridge, UK
* Christoph Egger, IRIF, Université Paris Cité, Paris, France
* Markulf Kohlweiss, University of Edinburgh, Edinburgh, UK
### Abstract
> Transport Layer Security (TLS) is the cryptographic backbone of secure communication on the Internet. In its latest version 1.3, the standardization process has taken formal analysis into account both due to the importance of the protocol and the experience with conceptual attacks against previous versions. To manage the complexity of TLS (the specification exceeds 100 pages), prior reduction-based analyses have focused on some protocol features and omitted others, e.g., included session resumption and omitted agile algorithms or vice versa.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_21](https://doi.org/10.1007/978-3-031-22963-3_21)
## YOLO YOSO: Fast and Simple Encryption and Secret Sharing in the YOSO Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#yolo-yoso-fast-and-simple-encryption-and-secret-sharing-in-the-yoso-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#yolo-yoso-fast-and-simple-encryption-and-secret-sharing-in-the-yoso-model)
### Authors
* Ignacio Cascudo, IMDEA Software Institute, Madrid, Spain
* Lydia Garms, IMDEA Software Institute, Madrid, Spain
* Bernardo David, IT University of Copenhagen, Copenhagen, Denmark
* Anders Konring, IT University of Copenhagen, Copenhagen, Denmark
* Lydia Garms, Keyless Technologies Limited, London, UK
### Abstract
> Achieving adaptive (or proactive) security in cryptographic protocols is notoriously difficult due to the adversary’s power to dynamically corrupt parties as the execution progresses. Inspired by the work of Benhamouda et al. in TCC 2020, Gentry et al. in CRYPTO 2021 introduced the YOSO (You Only Speak Once) model for constructing adaptively (or proactively) secure protocols in massively distributed settings (e.g. blockchains). In this model, instead of having all parties execute an entire protocol, smaller anonymous committees are randomly chosen to execute each individual round of the protocol. After playing their role, parties encrypt protocol messages towards the next anonymous committee and erase their internal state before publishing their ciphertexts. However, a big challenge remains in realizing YOSO protocols: efficiently encrypting messages towards anonymous parties selected at random without learning their identities, while proving the encrypted messages are valid with respect to the protocol. In particular, the protocols of Benhamouda et al. and of Gentry et al. require showing ciphertexts contain valid shares of secret states. We propose concretely efficient methods for encrypting a protocol’s secret state towards a random anonymous committee. We start by proposing a very simple and efficient scheme for encrypting messages towards randomly and anonymously selected parties. We then show constructions of publicly verifiable secret (re-)sharing (PVSS) schemes with concretely efficient proofs of (re-)share validity that can be generically instantiated from encryption schemes with certain linear homomorphic properties. In addition, we introduce a new PVSS with proof of sharing consisting of just two field elements, which as far as we know is the first achieving this, and may be of independent interest. Finally, we show that our PVSS schemes can be efficiently realized from our encryption scheme.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_22](https://doi.org/10.1007/978-3-031-22963-3_22)
## State Machine Replication Under Changing Network Conditions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#state-machine-replication-under-changing-network-conditions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#state-machine-replication-under-changing-network-conditions)
### Authors
* Andreea B. Alexandru, University of Maryland, College Park, USA
* Erica Blum, University of Maryland, College Park, USA
* Jonathan Katz, University of Maryland, College Park, USA
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Protocols for state machine replication (SMR) are typically designed for synchronous or asynchronous networks, with a lower corruption threshold in the latter case. Recent network-agnostic protocols are secure when run in either a synchronous or an asynchronous network. We propose two new constructions of network-agnostic SMR protocols that improve on existing protocols in terms of either the adversarial model or communication complexity:

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_23](https://doi.org/10.1007/978-3-031-22963-3_23)
## Non-interactive Mimblewimble Transactions, Revisited.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#non-interactive-mimblewimble-transactions-revisited)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#non-interactive-mimblewimble-transactions-revisited)
### Authors
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Michele Orrù, UC Berkeley, Berkeley, USA
### Abstract
> Mimblewimble is a cryptocurrency protocol that promises to overcome notorious blockchain scalability issues and provides user privacy. For a long time its wider adoption has been hindered by the lack of non-interactive transactions, that is, payments for which only the sender needs to be online. Yu proposed a way of adding non-interactive transactions to stealth addresses to Mimblewimble, but this turned out to be flawed. Building on Yu and integrating ideas from Burkett, we give a fixed scheme and provide a rigorous security analysis strenghtening the previous security model from Eurocrypt’19. Our protocol is considered for implementation by MimbleWimbleCoin and a variant is now deployed as MimbleWimble Extension Blocks (MWEB) in Litecoin.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_24](https://doi.org/10.1007/978-3-031-22963-3_24)
## A Universally Composable Non-interactive Aggregate Cash System.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#a-universally-composable-non-interactive-aggregate-cash-system)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#a-universally-composable-non-interactive-aggregate-cash-system)
### Authors
* Yanxue Jia, Shanghai Jiao Tong University, Shanghai, China
* Shi-Feng Sun, Shanghai Jiao Tong University, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
* Hong-Sheng Zhou, Virginia Commonwealth University, Richmond, USA
### Abstract
> Mimblewimble is a privacy-preserving cryptocurrency, providing the functionality of transaction aggregation. Once certain coins have been spent in Mimblewimble, they can be deleted from the UTXO set. This is desirable: now storage can be saved and computation cost can be reduced. Fuchsbauer et al. (EUROCRYPT 2019) abstracted Mimblewimble as an Aggregate Cash System (ACS) and provided security analysis via game-based definitions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_25](https://doi.org/10.1007/978-3-031-22963-3_25)
## Practical Provably Secure Flooding for Blockchains.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#practical-provably-secure-flooding-for-blockchains)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#practical-provably-secure-flooding-for-blockchains)
### Authors
* Chen-Da Liu-Zhang, NTT Research, Sunnyvale, USA
* Christian Matt, Concordium, Zurich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Guilherme Rito, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Søren Eller Thomsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
### Abstract
> In recent years, permisionless blockchains have received a lot of attention both from industry and academia, where substantial effort has been spent to develop consensus protocols that are secure under the assumption that less than half (or a third) of a given resource (e.g., stake or computing power) is controlled by corrupted parties. The security proofs of these consensus protocols usually assume the availability of a network functionality guaranteeing that a block sent by an honest party is received by all honest parties within some bounded time. To obtain an overall protocol that is secure under the same corruption assumption, it is therefore necessary to combine the consensus protocol with a network protocol that achieves this property under that assumption. In practice, however, the underlying network is typically implemented by flooding protocols that are not proven to be secure in the setting where a fraction of the considered total weight can be corrupted. This has led to many so-called eclipse attacks on existing protocols and tailor-made fixes against specific attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_26](https://doi.org/10.1007/978-3-031-22963-3_26)
## SNACKs: Leveraging Proofs of Sequential Work for Blockchain Light Clients.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-1].md#snacks-leveraging-proofs-of-sequential-work-for-blockchain-light-clients)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-1].md#snacks-leveraging-proofs-of-sequential-work-for-blockchain-light-clients)
### Authors
* Hamza Abusalah, IMDEA Software Institute, Madrid, Spain
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Peter Gaži, IOG, Chennai, India
* Karen Klein, ETH Zurich, Zürich, Switzerland
### Abstract
> The success of blockchains has led to ever-growing ledgers that are stored by all participating full nodes. In contrast, light clients only store small amounts of blockchain-related data and rely on the mediation of full nodes when interacting with the ledger. A broader adoption of blockchains calls for protocols that make this interaction trustless.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22963-3_27](https://doi.org/10.1007/978-3-031-22963-3_27)
