# Asiacrypt[2023-2]
## Fiat-Shamir Security of FRI and Related SNARKs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#fiat-shamir-security-of-fri-and-related-snarks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#fiat-shamir-security-of-fri-and-related-snarks)
### Authors
* Alexander R. Block, Georgetown University, Washington, D.C., USA
* Justin Thaler, Georgetown University, Washington, D.C., USA
* Alexander R. Block, University of Maryland, College Park, USA
* Jonathan Katz, University of Maryland, College Park, USA
* Albert Garreta, Nethermind, London, UK
* Michał Zając, Nethermind, London, UK
* Pratyush Ranjan Tiwari, Johns Hopkins University, Baltimore, USA
* Justin Thaler, A16z Crypto Research, Menlo Park, USA
### Abstract
> We establish new results on the Fiat-Shamir (FS) security of several protocols that are widely used in practice, and we provide general tools for establishing similar results for others. More precisely, we: (1) prove the FS security of the FRI and batched FRI protocols; (2) analyze a general class of protocols, which we call \(\delta \)-correlated, that use low-degree proximity testing as a subroutine (this includes many “Plonk-like” protocols (e.g., Plonky2 and Redshift), ethSTARK, RISC Zero, etc.); and (3) prove FS security of the aforementioned “Plonk-like” protocols, and sketch how to prove the same for the others.
> 
> We obtain our first result by analyzing the round-by-round (RBR) soundness and RBR knowledge soundness of FRI. For the second result, we prove that if a \(\delta \)-correlated protocol is RBR (knowledge) sound under the assumption that adversaries always send low-degree polynomials, then it is RBR (knowledge) sound in general. Equipped with this tool, we prove our third result by formally showing that “Plonk-like” protocols are RBR (knowledge) sound under the assumption that adversaries always send low-degree polynomials. We then outline analogous arguments for the remainder of the aforementioned protocols.
> 
> To the best of our knowledge, ours is the first formal analysis of the Fiat-Shamir security of FRI and widely deployed protocols that invoke it.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_1](https://doi.org/10.1007/978-981-99-8724-5_1)
## On Black-Box Knowledge-Sound Commit-And-Prove SNARKs.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#on-black-box-knowledge-sound-commit-and-prove-snarks)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#on-black-box-knowledge-sound-commit-and-prove-snarks)
### Authors
* Helger Lipmaa, University of Tartu, Tartu, Estonia
### Abstract
> Gentry and Wichs proved that adaptively sound SNARGs for hard languages need non-falsifiable assumptions. Lipmaa and Pavlyk claimed Gentry-Wichs is tight by constructing a non-adaptively sound zk-SNARG FANA for \(\textsf{NP}\) from falsifiable assumptions. We show that FANA is flawed. We define and construct a fully algebraic F-position-binding vector commitment scheme \(\textrm{VCF}\). We construct a concretely efficient commit-and-prove zk-SNARK Punic, a version of FANA with an additional \(\textrm{VCF}\) commitment to the witness. Punic satisfies semi-adaptive black-box \(G\)-knowledge-soundness, a new natural knowledge-soundness notion for commit-and-prove SNARKs. We use a new proof technique to achieve global consistency using a functional somewhere-extractable commitment scheme to extract vector commitment’s local proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_2](https://doi.org/10.1007/978-981-99-8724-5_2)
## Protostar: Generic Efficient Accumulation/Folding for Special-Sound Protocols.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#protostar-generic-efficient-accumulation-folding-for-special-sound-protocols)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#protostar-generic-efficient-accumulation-folding-for-special-sound-protocols)
### Authors
* Benedikt Bünz, Espresso Systems, Middletown, USA
* Binyi Chen, Espresso Systems, Middletown, USA
* Benedikt Bünz, New York University, New York, USA
### Abstract
> Accumulation is a simple yet powerful primitive that enables incrementally verifiable computation (IVC) without the need for recursive SNARKs. We provide a generic, efficient accumulation (or folding) scheme for any \((2k-1)\)-move special-sound protocol with a verifier that checks \(\ell \) degree-d equations. The accumulation verifier only performs \(k+2\) elliptic curve multiplications and \(k\,+\,d\,+\,O(1)\) field/hash operations. Using the compiler from BCLMS21 (Crypto 21), this enables building efficient IVC schemes where the recursive circuit only depends on the number of rounds and the verifier degree of the underlying special-sound protocol but not the proof size or the verifier time. We use our generic accumulation compiler to build Protostar. Protostar is a non-uniform IVC scheme for Plonk that supports high-degree gates and (vector) lookups. The recursive circuit is dominated by 3 group scalar multiplications and a hash of \(d^*\) field elements, where \(d^*\) is the degree of the highest gate. The scheme does not require a trusted setup or pairings, and the prover does not need to compute any FFTs. The prover in each accumulation/IVC step is also only logarithmic in the number of supported circuits and independent of the table size in the lookup.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_3](https://doi.org/10.1007/978-981-99-8724-5_3)
## Polynomial IOPs for Memory Consistency Checks in Zero-Knowledge Virtual Machines.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#polynomial-iops-for-memory-consistency-checks-in-zero-knowledge-virtual-machines)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#polynomial-iops-for-memory-consistency-checks-in-zero-knowledge-virtual-machines)
### Authors
* Yuncong Zhang, Shanghai Jiao Tong University, Shanghai, China
* Shi-Feng Sun, Shanghai Jiao Tong University, Shanghai, China
* Dawu Gu, Shanghai Jiao Tong University, Shanghai, China
* Ren Zhang, Cryptape Co. Ltd. and Nervos, Hangzhou, China
### Abstract
> Zero-Knowledge Virtual Machines (ZKVMs) have gained traction in recent years due to their potential applications in a variety of areas, particularly blockchain ecosystems. Despite tremendous progress on ZKVMs in the industry, no formal definitions or security proofs have been established in the literature. Due to this lack of formalization, existing protocols exhibit significant discrepancies in terms of problem definitions and performance metrics, making it difficult to analyze and compare these advancements, or to trust the security of the increasingly complex ZKVM implementations.
> 
> In this work, we focus on random-access memory, an influential and expensive component of ZKVMs. Specifically, we investigate the state-of-the-art protocols for validating the correct functioning of memory, which we refer to as the memory consistency checks. Isolating these checks from the rest of the system allows us to formalize their definition and security notion. Furthermore, we summarize the state-of-the-art constructions using the Polynomial IOP model and formally prove their security. Observing that the bottleneck of existing designs lies in sorting the entire memory trace, we break away from this paradigm and propose a novel memory consistency check, dubbed \(\textsf{Permem}\). \(\textsf{Permem}\) bypasses this bottleneck by introducing a technique called the address cycle method, which requires fewer building blocks and—after instantiating the building blocks with state-of-the-art constructions—fewer online polynomial oracles and evaluation queries. In addition, we propose \(\textsf{gcq}\), a new construction for the lookup argument—a key building block of the memory consistency check, which costs fewer online polynomial oracles than the state-of-the-art construction \(\textsf{cq}\).

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_4](https://doi.org/10.1007/978-981-99-8724-5_4)
## Weak Zero-Knowledge via the Goldreich-Levin Theorem.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#weak-zero-knowledge-via-the-goldreich-levin-theorem)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#weak-zero-knowledge-via-the-goldreich-levin-theorem)
### Authors
* Dakshita Khurana, UIUC, Urbana-Champaign, USA
* Kabir Tomer, UIUC, Urbana-Champaign, USA
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Obtaining three round zero-knowledge from standard cryptographic assumptions has remained a challenging open problem. Meanwhile, there has been exciting progress in realizing useful relaxations such as weak zero-knowledge, strong witness indistinguishability and witness hiding in two or three rounds. In particular, known realizations from generic assumptions obtain: (1) security against adaptive verifiers assuming fully homomorphic encryption among other standard assumptions (Bitansky et. al., STOC 2019), and (2) security against non-adaptive verifiers in the distributional setting from oblivious transfer (Jain et. al., Crypto 2017).
> 
> This work builds three round weak zero-knowledge for NP in the non-adaptive setting from doubly-enhanced injective trapdoor functions. We obtain this result by developing a new distinguisher-dependent simulation technique that makes crucial use of the Goldreich-Levin list decoding algorithm, and may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_5](https://doi.org/10.1007/978-981-99-8724-5_5)
## A Simple and Efficient Framework of Proof Systems for NP.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#a-simple-and-efficient-framework-of-proof-systems-for-np)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#a-simple-and-efficient-framework-of-proof-systems-for-np)
### Authors
* Yuyu Wang, University of Electronic Science and Technology of China, Chengdu, China
* Chuanjie Su, University of Electronic Science and Technology of China, Chengdu, China
* Jiaxin Pan, University of Kassel, Kassel, Germany
* Jiaxin Pan, Department of Mathematical Sciences, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Qingdao, 266237, China
### Abstract
> In this work, we propose a simple framework of constructing efficient non-interactive zero-knowledge proof (NIZK) systems for all \(\textsf{NP}\). Compared to the state-of-the-art construction by Groth, Ostrovsky, and Sahai (J. ACM, 2012), our resulting NIZK system reduces the proof size and proving and verification cost without any trade-off, i.e., neither increasing computation cost, CRS size nor resorting to stronger assumptions.
> 
> Furthermore, we extend our framework to construct a batch argument (BARG) system for all \(\textsf{NP}\). Our construction remarkably improves the efficiency of BARG by Waters and Wu (Crypto 2022) without any trade-off.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_6](https://doi.org/10.1007/978-981-99-8724-5_6)
## Sigma Protocols from Verifiable Secret Sharing and Their Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#sigma-protocols-from-verifiable-secret-sharing-and-their-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#sigma-protocols-from-verifiable-secret-sharing-and-their-applications)
### Authors
* Min Zhang, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Yu Chen, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Chuanzhou Yao, School of Cyber Science and Technology, Shandong University, Qingdao, 266237, China
* Min Zhang, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Yu Chen, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Chuanzhou Yao, State Key Laboratory of Cryptology, P.O. Box 5159, Beijing, 100878, China
* Min Zhang, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Yu Chen, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Chuanzhou Yao, Key Laboratory of Cryptologic Technology and Information Security of Ministry of Education, Shandong University, Qingdao, 266237, China
* Zhichao Wang, State Key Laboratory of Information Security, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, 100085, China
* Zhichao Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, 100049, China
### Abstract
> Sigma protocols are one of the most common and efficient zero-knowledge proofs (ZKPs). Over the decades, a large number of Sigma protocols are proposed, yet few works pay attention to the common design principal. In this work, we propose a generic framework of Sigma protocols for algebraic statements from verifiable secret sharing (VSS) schemes. Our framework provides a general and unified approach to understanding Sigma protocols. It not only neatly explains the classic protocols such as Schnorr, Guillou-Quisquater and Okamoto protocols, but also leads to new Sigma protocols that were not previously known. Furthermore, we show an application of our framework in designing ZKPs for composite statements, which contain both algebraic and non-algebraic statements. We give a generic construction of non-interactive ZKPs for composite statements by combining Sigma protocols from VSS and ZKPs following MPC-in-the-head paradigm in a seamless way via a technique of witness sharing reusing. Our construction has advantages of requiring no “glue” proofs for combining algebraic and non-algebraic statements. By instantiating our construction using Ligero++ (Bhadauria et al., CCS 2020) and designing an associated Sigma protocol from VSS, we obtain a concrete ZKP for composite statements which achieves a tradeoff between running time and proof size, thus resolving the open problem left by Backes et al. (PKC 2019).

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_7](https://doi.org/10.1007/978-981-99-8724-5_7)
## Anonymous Counting Tokens.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#anonymous-counting-tokens)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#anonymous-counting-tokens)
### Authors
* Fabrice Benhamouda, Amazon Web Services, Seattle, USA
* Mariana Raykova, Google, Menlo Park, USA
* Karn Seth, Google, Menlo Park, USA
### Abstract
> We introduce a new primitive called anonymous counting tokens (ACTs) which allows clients to obtain blind signatures or MACs (aka tokens) on messages of their choice, while at the same time enabling issuers to enforce rate limits on the number of tokens that a client can obtain for each message. Our constructions enforce that each client will be able to obtain only one token per message and we show a generic transformation to support other rate limiting as well. We achieve this new property while maintaining the unforgeability and unlinkability properties required for anonymous tokens schemes. We present four ACT constructions with various trade-offs for their efficiency and underlying security assumptions. One construction uses factorization-based primitives and a cyclic group. It is secure in the random oracle model under the q-DDHI assumption (in a cyclic group) and the DCR assumption. Our three other constructions use bilinear maps: one is secure in the standard model under q-DDHI and SXDH, one is secure in the random oracle model under SXDH, and the most efficient of the three is secure in the random oracle model and generic bilinear group model.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_8](https://doi.org/10.1007/978-981-99-8724-5_8)
## Predicate Aggregate Signatures and Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#predicate-aggregate-signatures-and-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#predicate-aggregate-signatures-and-applications)
### Authors
* Tian Qiu, The University of Sydney, Sydney, Australia
* Qiang Tang, The University of Sydney, Sydney, Australia
### Abstract
> Motivated by applications in anonymous reputation systems and blockchain governance, we initiate the study of predicate aggregate signatures (PAS), which is a new primitive that enables users to sign multiple messages, and these individual signatures can be aggregated by a combiner, preserving the anonymity of the signers. The resulting PAS discloses only a brief description of signers for each message and provides assurance that both the signers and their description satisfy the specified public predicate.
> 
> We formally define PAS and give a construction framework to yield a logarithmic size signature, and further reduce the verification time also to logarithmic. We also give several instantiations for several concrete predicates that may be of independent interest.
> 
> To showcase its power, we also demonstrate its applications to multiple settings including multi-signatures, aggregate signatures, threshold signatures, (threshold) ring signatures, attribute-based signatures, etc, and advance the state of the art in all of them.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_9](https://doi.org/10.1007/978-981-99-8724-5_9)
## Bicameral and Auditably Private Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#bicameral-and-auditably-private-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#bicameral-and-auditably-private-signatures)
### Authors
* Khoa Nguyen, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Partha Sarathi Roy, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Yanhong Xu, School of Electronic Information and Electrical Engineering, Shanghai Jiao Tong University, 800 Dongchuan Road, Shanghai, 200240, China
### Abstract
> This paper introduces Bicameral and Auditably Private Signatures (BAPS) – a new privacy-preserving signature system with several novel features. In a BAPS system, given a certified attribute \(\textbf{x}\) and a certified policy P, a signer can issue a publicly verifiable signature \(\varSigma \) on a message m as long as \((m, \textbf{x})\) satisfies P. A noteworthy characteristic of BAPS is that both attribute \(\textbf{x}\) and policy P are kept hidden from the verifier, yet the latter is convinced that these objects were certified by an attribute-issuing authority and a policy-issuing authority, respectively. By considering bicameral certification authorities and requiring privacy for both attributes and policies, BAPS generalizes the spirit of existing advanced signature primitives with fine-grained controls on signing capabilities (e.g., attribute-based signatures, predicate signatures, policy-based signatures). Furthermore, BAPS provides an appealing feature named auditable privacy, allowing the signer of \(\varSigma \) to verifiably disclose various pieces of partial information about P and \(\textbf{x}\) when asked by auditor(s)/court(s) at later times. Auditable privacy is intrinsically different from and can be complementary to the notion of accountable privacy traditionally incorporated in traceable anonymous systems such as group signatures. Equipped with these distinguished features, BAPS can potentially address interesting application scenarios for which existing primitives do not offer a direct solution.
> 
> We provide rigorous security definitions for BAPS, following a “sim-ext” approach. We then demonstrate a generic construction based on commonly used cryptographic building blocks, which employs a sign-then-commit-then-prove design. Finally, we present a concrete instantiation of BAPS, that is proven secure in the random oracle model under lattice assumptions. The scheme can handle arbitrary policies represented by polynomial-size Boolean circuits and can address quadratic disclosing functions. In the construction process, we develop a new technical building block that could be of independent interest: a zero-knowledge argument system allowing to prove the satisfiability of a certified-and-hidden Boolean circuit on certified-and-committed inputs.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_10](https://doi.org/10.1007/978-981-99-8724-5_10)
## Threshold Structure-Preserving Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#threshold-structure-preserving-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#threshold-structure-preserving-signatures)
### Authors
* Elizabeth Crites, University of Edinburgh, Edinburgh, UK
* Markulf Kohlweiss, University of Edinburgh, Edinburgh, UK
* Markulf Kohlweiss, Input Output, Edinburgh, UK
* Bart Preneel, COSIC, KU Leuven, Leuven, Belgium
* Mahdi Sedaghat, COSIC, KU Leuven, Leuven, Belgium
* Daniel Slamanig, AIT Austrian Institute of Technology, Vienna, Austria
### Abstract
> Structure-preserving signatures (SPS) are an important building block for privacy-preserving cryptographic primitives, such as electronic cash, anonymous credentials, and delegatable anonymous credentials. In this work, we introduce the first threshold structure-preserving signature scheme (TSPS). This enables multiple parties to jointly sign a message, resulting in a standard, single-party SPS signature, and can thus be used as a replacement for applications based on SPS.
> 
> We begin by defining and constructing SPS for indexed messages, which are messages defined relative to a unique index. We prove its security in the random oracle model under a variant of the generalized Pointcheval-Sanders assumption (PS). Moreover, we generalize this scheme to an indexed multi-message SPS for signing vectors of indexed messages, which we prove secure under the same assumption. We then formally define the notion of a TSPS and propose a construction based on our indexed multi-message SPS. Our TSPS construction is fully non-interactive, meaning that signers simply output partial signatures without communicating with the other signers. Additionally, signatures are short: they consist of 2 group elements and require 2 pairing product equations to verify. We prove the security of our TSPS under the security of our indexed multi-message SPS scheme. Finally, we show that our TSPS may be used as a drop-in replacement for UC-secure Threshold-Issuance Anonymous Credential (TIAC) schemes, such as Coconut, without the overhead of the Fischlin transform.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_11](https://doi.org/10.1007/978-981-99-8724-5_11)
## Practical Round-Optimal Blind Signatures in the ROM from Standard Assumptions.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#practical-round-optimal-blind-signatures-in-the-rom-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#practical-round-optimal-blind-signatures-in-the-rom-from-standard-assumptions)
### Authors
* Shuichi Katsumata, PQShield Ltd., Oxford, UK
* Michael Reichle, ETH Zürich, Zürich, Switzerland
* Shuichi Katsumata, AIST, Tokyo, Japan
* Yusuke Sakai, AIST, Tokyo, Japan
### Abstract
> Blind signatures serve as a foundational tool for privacy-preserving applications and have recently seen renewed interest due to new applications in blockchains and privacy-authentication tokens. With this, constructing practical round-optimal (i.e., signing consists of the minimum two rounds) blind signatures in the random oracle model (ROM) has been an active area of research, where several impossibility results indicate that either the ROM or a trusted setup is inherent.
> 
> In this work, we present two round-optimal blind signatures under standard assumptions in the ROM with different approaches: one achieves the smallest sum of the signature and communication sizes, while the other achieves the smallest signature size. Both of our instantiations are based on standard assumptions over asymmetric pairing groups, i.e., \(\textsf{CDH}\), \(\textsf{DDH}\), and/or \(\textsf{SXDH}\). Our first construction is a highly optimized variant of the generic blind signature construction by Fischlin (CRYPTO’06) and has signature and communication sizes 447 B and 303 B, respectively. We progressively weaken the building blocks required by Fischlin and we result in the first blind signature where the sum of the signature and communication sizes fit below 1 KB based on standard assumptions. Our second construction is a semi-generic construction from a specific class of randomizable signature schemes that admits an all-but-one reduction. The signature size is only 96 B while the communication size is 2.2 KB. This matches the previously known smallest signature size while improving the communication size by several orders of magnitude. Finally, both of our constructions rely on a (non-black box) fine-grained analysis of the forking lemma that may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_12](https://doi.org/10.1007/978-981-99-8724-5_12)
## A Generic Construction of an Anonymous Reputation System and Instantiations from Lattices.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#a-generic-construction-of-an-anonymous-reputation-system-and-instantiations-from-lattices)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#a-generic-construction-of-an-anonymous-reputation-system-and-instantiations-from-lattices)
### Authors
* Johannes Blömer, Paderborn University, Paderborn, Germany
* Laurens Porzenheim, Paderborn University, Paderborn, Germany
* Jan Bobolz, University of Edinburgh, Edinburgh, UK
### Abstract
> With an anonymous reputation system one can realize the process of rating sellers anonymously in an online shop. While raters can stay anonymous, sellers still have the guarantee that they can only be reviewed by raters who bought their product.
> 
> We present the first generic construction of a reputation system from basic building blocks, namely digital signatures, encryption schemes, non-interactive zero-knowledge proofs, and linking indistinguishable tags. We then show the security of the reputation system in a strong security model. Among others, we instantiate the generic construction with building blocks based on lattice problems, leading to the first module lattice-based reputation system in the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_13](https://doi.org/10.1007/978-981-99-8724-5_13)
## Universally Composable Auditable Surveillance.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2023-2].md#universally-composable-auditable-surveillance)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2023-2].md#universally-composable-auditable-surveillance)
### Authors
* Valerie Fetzer, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Jörn Müller-Quade, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Markus Raiber, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Michael Klooß, Aalto University, Espoo, Finland
* Andy Rupp, University of Luxembourg, Esch-sur-Alzette, Luxembourg
* Valerie Fetzer, KASTEL Security Research Labs, Karlsruhe, Germany
* Jörn Müller-Quade, KASTEL Security Research Labs, Karlsruhe, Germany
* Markus Raiber, KASTEL Security Research Labs, Karlsruhe, Germany
* Andy Rupp, KASTEL Security Research Labs, Karlsruhe, Germany
### Abstract
> User privacy is becoming increasingly important in our digital society. Yet, many applications face legal requirements or regulations that prohibit unconditional anonymity guarantees, e.g., in electronic payments where surveillance is mandated to investigate suspected crimes.
> 
> As a result, many systems have no effective privacy protections at all, or have backdoors, e.g., stored at the operator side of the system, that can be used by authorities to disclose a user’s private information (e.g., lawful interception). The problem with such backdoors is that they also enable silent mass surveillance within the system. To prevent such misuse, various approaches have been suggested which limit possible abuse or ensure it can be detected. Many works consider auditability of surveillance actions but do not enforce that traces are left when backdoors are retrieved. A notable exception which offers retrospective and silent surveillance is the recent work on misuse-resistant surveillance by Green et al. (EUROCRYPT’21). However, their approach relies on extractable witness encryption, which is a very strong primitive with no known efficient and secure implementations.
> 
> In this work, we develop a building block for auditable surveillance. In our protocol, backdoors or escrow secrets of users are protected in multiple ways: (1) Backdoors are short-term and user-specific; (2) they are shared between trustworthy parties to avoid a single point of failure; and (3) backdoor access is given conditionally. Moreover (4) there are audit trails and public statistics for every (granted) backdoor request; and (5) surveillance remains silent, i.e., users do not know they are surveilled.
> 
> Concretely, we present an abstract UC-functionality which can be used to augment applications with auditable surveillance capabilities. Our realization makes use of threshold encryption to protect user secrets, and is concretely built in a blockchain context with committee-based YOSO MPC. As a consequence, the committee can verify that the conditions for backdoor access are given, e.g., that law enforcement is in possession of a valid surveillance warrant (via a zero-knowledge proof). Moreover, access leaves an audit trail on the ledger, which allows an auditor to retrospectively examine surveillance decisions.
> 
> As a toy example, we present an Auditably Sender-Traceable Encryption scheme, a PKE scheme where the sender can be deanonymized by law enforcement. We observe and solve problems posed by retrospective surveillance via a special non-interactive non-committing encryption scheme which allows zero-knowledge proofs over message, sender identity and (escrow) secrets.

### Links
- **URL:** [https://doi.org/10.1007/978-981-99-8724-5_14](https://doi.org/10.1007/978-981-99-8724-5_14)
