# Eurocrypt[2024-2]
## Anamorphic Encryption, Revisited.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#anamorphic-encryption-revisited)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#anamorphic-encryption-revisited)
### Authors
* Fabio Banfi, Zühlke Engineering AG, Schlieren, Switzerland
* Konstantin Gegier, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Martin Hirt, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Ueli Maurer, Department of Computer Science, ETH Zurich, Zürich, Switzerland
* Guilherme Rito, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> An anamorphic encryption scheme allows two parties who share a so-called double key to embed covert messages in ciphertexts of an established PKE scheme. This protects against a dictator that can force the receiver to reveal the secret keys for the PKE scheme, but who is oblivious about the existence of the double key. We identify two limitations of the original model by Persiano, Phan, and Yung (EUROCRYPT 2022). First, in their definition a double key can only be generated once, together with a key-pair. This has the drawback that a receiver who wants to use the anamorphic mode after a dictator comes to power, needs to deploy a new key-pair, a potentially suspicious act. Second, a receiver cannot distinguish whether or not a ciphertext contains a covert message.
> 
> In this work we propose a new model that overcomes these limitations. First, we allow to associate multiple double keys to a key-pair, after its deployment. This also enables deniability in case the double key only depends on the public key. Second, we propose a natural robustness notion, which guarantees that anamorphically decrypting a regularly encrypted message results in a special symbol indicating that no covert message is contained, which also eliminates certain attacks.
> 
> Finally, to instantiate our new, stronger definition of anamorphic encryption, we provide generic and concrete constructions. Concretely, we show that ElGamal and Cramer-Shoup satisfy a new condition, selective randomness recoverability, which enables robust anamorphic extensions, and we also provide a robust anamorphic extension for RSA-OAEP.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_1](https://doi.org/10.1007/978-3-031-58723-8_1)
## Anamorphic Encryption: New Constructions and Homomorphic Realizations.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#anamorphic-encryption-new-constructions-and-homomorphic-realizations)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#anamorphic-encryption-new-constructions-and-homomorphic-realizations)
### Authors
* Dario Catalano, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Francesco Migliaro, Dipartimento di Matematica e Informatica, Università di Catania, Catania, Italy
* Emanuele Giunta, IMDEA Software Institute, Madrid, Spain
* Emanuele Giunta, Universidad Politecnica de Madrid, Madrid, Spain
* Emanuele Giunta, Web 3.0 Foundation, Zug, Switzerland
### Abstract
> The elegant paradigm of Anamorphic Encryption (Persiano et al., Eurocrypt 2022) considers the question of establishing a private communication in a world controlled by a dictator. The challenge is to allow two users, sharing some secret anamorphic key, to exchange covert messages without the dictator noticing, even when the latter has full access to the regular secret keys. Over the last year several works considered this question and proposed constructions, novel extensions and strengthened definitions.
> 
> In this work we make progress on the study of this primitive in three main directions. First, we show that two general and well established encryption paradigms, namely hybrid encryption and the IBE-to-CCA transform, admit very simple and natural anamorphic extensions. Next, we show that anamorphism, far from being a phenomenon isolated to “basic” encryption schemes, extends also to homomorphic encryption. We show that some existing homomorphic schemes, (and most notably the fully homomorphic one by Gentry, Sahai and Waters) can be made anamorphic, while retaining their homomorphic properties both with respect to the regular and the covert message.
> 
> Finally we refine the notion of anamorphic encryption by envisioning the possibility of splitting the anamorphic key into an encryption component (that only allows to encrypt covert messages) and a decryption component. This makes possible for a receiver to set up several, independent, covert channels associated with a single covert key.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_2](https://doi.org/10.1007/978-3-031-58723-8_2)
## Fully Homomorphic Encryption Beyond IND-CCA1 Security: Integrity Through Verifiability.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#fully-homomorphic-encryption-beyond-ind-cca1-security-integrity-through-verifiability)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#fully-homomorphic-encryption-beyond-ind-cca1-security-integrity-through-verifiability)
### Authors
* Mark Manulis, PACY Lab @ RI CODE, Universität der Bundeswehr München, Munich, Germany
* Jérôme Nguyen, PACY Lab @ RI CODE, Universität der Bundeswehr München, Munich, Germany
### Abstract
> We focus on the problem of constructing fully homomorphic encryption (FHE) schemes that achieve some meaningful notion of adaptive chosen-ciphertext security beyond \(\textrm{CCA1}\). Towards this, we propose a new notion, called security against verified chosen-ciphertext attack (\(\textrm{vCCA}\)). The idea behind it is to ascertain integrity of the ciphertext by imposing a strong control on the evaluation algorithm. Essentially, we require that a ciphertext obtained by the use of homomorphic evaluation must be “linked” to the original input ciphertexts. We formalize the \(\textrm{vCCA}\) notion in two equivalent formulations; the first is in the indistinguishability paradigm, the second follows the non-malleability simulation-based approach, and is a generalization of the targeted malleability introduced by Boneh et al. in 2012.
> 
> We strengthen the credibility of our definitions by exploring relations to existing security notions for homomorphic encryption schemes, namely \(\textrm{CCA1}\), \(\textrm{RCCA}\), \(\textrm{FuncCPA}\), \(\textrm{CCVA}\), and \(\textrm{HCCA}\). We prove that \(\textrm{vCCA}\) security is the strongest notion known so far, that can be achieved by an FHE scheme; in particular, \(\textrm{vCCA}\) is strictly stronger than \(\textrm{CCA1}\).
> 
> Finally, we provide a general transformation, that takes any \(\textrm{CPA}\)-secure FHE scheme and makes it \(\textrm{vCCA}\)-secure. Our transformation first turns an FHE scheme into a \(\textrm{CCA2}\)-secure scheme where a part of the ciphertext retains the homomorphic properties and then extends it with a succinct non-interactive argument of knowledge (SNARK) to verifiably control the evaluation algorithm. In fact, we obtain four general variations of this transformation. We handle both the asymmetric and the symmetric key FHE schemes, and for each we give two variations differing in whether the ciphertext integrity can be verified publicly or requires the secret key. We use well-known techniques to achieve \(\textrm{CCA2}\) security in the first step of our transformation. In the asymmetric case, we use the double encryption paradigm, and in the symmetric case, we use Encrypt-then-MAC techniques. Furthermore, our transformation also gives the first \(\textrm{CCA1}\)-secure FHE scheme based on bootstrapping techniques.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_3](https://doi.org/10.1007/978-3-031-58723-8_3)
## Bootstrapping Bits with CKKS.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#bootstrapping-bits-with-ckks)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#bootstrapping-bits-with-ckks)
### Authors
* Youngjin Bae, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, CryptoLab Inc., Seoul, Republic of Korea
* Jaehyung Kim, CryptoLab Inc., Seoul, Republic of Korea
* Jung Hee Cheon, Seoul National University, Seoul, Republic of Korea
* Damien Stehlé, CryptoLab Inc., Lyon, France
### Abstract
> The Cheon–Kim–Kim–Song (CKKS) fully homomorphic encryption scheme is designed to efficiently perform computations on real numbers in an encrypted state. Recently, Drucker et al [J. Cryptol.] proposed an efficient strategy to use CKKS in a black-box manner to perform computations on binary data.
> 
> In this work, we introduce several CKKS bootstrapping algorithms designed specifically for ciphertexts encoding binary data. Crucially, the new CKKS bootstrapping algorithms enable to bootstrap ciphertexts containing the binary data in the most significant bits. First, this allows to decrease the moduli used in bootstrapping, saving a larger share of the modulus budget for non-bootstrapping operations. In particular, we obtain full-slot bootstrapping in ring degree \(2^{14}\) for the first time. Second, the ciphertext format is compatible with the one used in the DM/CGGI fully homomorphic encryption schemes. Interestingly, we may combine our CKKS bootstrapping algorithms for bits with the fast ring packing technique from Bae et al [CRYPTO’23]. This leads to a new bootstrapping algorithm for DM/CGGI that outperforms the state-of-the-art approaches when the number of bootstraps to be performed simultaneously is in the low hundreds.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_4](https://doi.org/10.1007/978-3-031-58723-8_4)
## Concurrently Secure Blind Schnorr Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#concurrently-secure-blind-schnorr-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#concurrently-secure-blind-schnorr-signatures)
### Authors
* Georg Fuchsbauer, TU Wien, Vienna, Austria
* Mathias Wolf, TU Wien, Vienna, Austria
### Abstract
> Many applications of blind signatures, e.g. in blockchains, require compatibility of the resulting signatures with the existing system. This makes blind issuing of Schnorr signatures (now being standardized and supported by major cryptocurrencies) desirable. Concurrent security of the signing protocol is required to thwart denial-of-service attacks.
> 
> We present a concurrently secure blind-signing protocol for Schnorr signatures, using the standard primitives NIZK and PKE and assuming that Schnorr signatures themselves are unforgeable. Our protocol is the first to be compatible with standard Schnorr implementations over 256-bit elliptic curves. We cast our scheme as a generalization of blind and partially blind signatures: we introduce the notion of predicate blind signatures, in which the signer can define a predicate that the blindly signed message must satisfy.
> 
> We provide implementations and benchmarks for various choices of primitives and scenarios, such as blindly signing Bitcoin transactions only when they meet certain conditions specified by the signer.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_5](https://doi.org/10.1007/978-3-031-58723-8_5)
## Foundations of Adaptor Signatures.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#foundations-of-adaptor-signatures)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#foundations-of-adaptor-signatures)
### Authors
* Paul Gerhart, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Dominique Schröder, Friedrich-Alexander-Universität Erlangen-Nürnberg, Erlangen, Germany
* Pratik Soni, University of Utah, Salt Lake City, UT, USA
* Sri AravindaKrishnan Thyagarajan, University of Sydney, Sydney, Australia
### Abstract
> Adaptor signatures extend the functionality of regular signatures through the computation of pre-signatures on messages for statements of NP relations. Pre-signatures are publicly verifiable; they simultaneously hide and commit to a signature of an underlying signature scheme on that message. Anybody possessing a corresponding witness for the statement can adapt the pre-signature to obtain the “regular” signature. Adaptor signatures have found numerous applications for conditional payments in blockchain systems, like payment channels (CCS’20, CCS’21), private coin mixing (CCS’22, SP’23), and oracle-based payments (NDSS’23).
> 
> In our work, we revisit the state of the security of adaptor signatures and their constructions. In particular, our two main contributions are:
> 
> Security Gaps and Definitions: We review the widely-used security model of adaptor signatures due to Aumayr et al. (AC’21) and identify gaps in their definitions that render known protocols for private coin-mixing and oracle-based payments insecure. We give simple counterexamples of adaptor signatures that are secure w.r.t. their definitions but result in insecure instantiations of these protocols. To fill these gaps, we identify a minimal set of modular definitions that align with these practical applications.
> 
> Secure Constructions: Despite their popularity, all known constructions are (1) derived from identification schemes via the Fiat-Shamir transform in the random oracle model or (2) require modifications to the underlying signature verification algorithm, thus making the construction useless in the setting of cryptocurrencies. More concerningly, all known constructions were proven secure w.r.t. the insufficient definitions of Aumayr et al., leaving us with no provably secure adaptor signature scheme to use in applications.
> 
> Firstly, in this work, we salvage all current applications by proving the security of the widely-used Schnorr adaptor signatures under our proposed definitions. We then provide several new constructions, including presenting the first adaptor signature schemes for Camenisch-Lysyanskaya (CL), Boneh-Boyen-Shacham (BBS+), and Waters signatures, all of which are proven secure in the standard model. Our new constructions rely on a new abstraction of digital signatures, called dichotomic signatures, which covers the essential properties we need to build adaptor signatures. Proving the security of all constructions (including identification-based schemes) relies on a novel non-black-box proof technique. Both our digital signature abstraction and the proof technique could be of independent interest to the community.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_6](https://doi.org/10.1007/978-3-031-58723-8_6)
## Laconic Function Evaluation, Functional Encryption and Obfuscation for RAMs with Sublinear Computation.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#laconic-function-evaluation-functional-encryption-and-obfuscation-for-rams-with-sublinear-computation)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#laconic-function-evaluation-functional-encryption-and-obfuscation-for-rams-with-sublinear-computation)
### Authors
* Fangqi Dong, IIIS, Tsinghua University, Beijing, China
* Zihan Hao, IIIS, Tsinghua University, Beijing, China
* Ethan Mook, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Daniel Wichs, NTT Research, Sunnyvale, USA
### Abstract
> Laconic function evaluation (LFE) is a “flipped” version of fully homomorphic encryption, where the server performing the computation gets the output. The server commits itself to a function f by outputting a small digest. Clients can later efficiently encrypt inputs x with respect to the digest in much less time than computing f, and ensure that the server only decrypts f(x), but does not learn anything else about x. Prior works constructed LFE for circuits under LWE, and for Turing Machines (TMs) from indistinguishability obfuscation (iO). In this work we introduce LFE for Random-Access Machines (RAM-LFE). The server commits itself to a potentially huge database y via a short digest. Clients can later efficiently encrypt inputs x with respect to the digest and the server decrypts f(x, y) for some specified RAM program f (e.g., a universal RAM), without learning anything else about x. The main advantage of RAM-LFE is that the server’s decryption run-time only scales with the RAM run-time T of the computation f(x, y), which can be sublinear in both |x| and |y|. We consider a weakly efficient variant, where the client’s run-time is also allowed to scale linearly with T, but not |y|, and a fully efficient variant, where the client’s run-time must be sublinear in both T and |y|. We construct the former from doubly efficient private information retrieval (DEPIR) and laconic OT (LOT), both of which are known from RingLWE, and the latter from an additional use of iO. We then show how to leverage fully efficient RAM-LFE to also get (many-key) functional encryption for RAMs (RAM-FE) where secret keys are associate with big databases y and the decryption time is sublinear in |y|, as well as iO for RAMs where the obfuscated program contains a big database y and the evaluation time is sublinear in |y|.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_7](https://doi.org/10.1007/978-3-031-58723-8_7)
## Threshold Raccoon: Practical Threshold Signatures from Standard Lattice Assumptions.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#threshold-raccoon-practical-threshold-signatures-from-standard-lattice-assumptions)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#threshold-raccoon-practical-threshold-signatures-from-standard-lattice-assumptions)
### Authors
* Rafael del Pino, PQShield, Oxford, UK
* Shuichi Katsumata, PQShield, Oxford, UK
* Mary Maller, PQShield, Oxford, UK
* Thomas Prest, PQShield, Oxford, UK
* Markku-Juhani Saarinen, PQShield, Oxford, UK
* Shuichi Katsumata, AIST, Tokyo, Japan
* Mary Maller, Ethereum Foundation, Zug, Switzerland
* Fabrice Mouhartem, XWiki/CryptPad, Bruxelles, Belgium
* Markku-Juhani Saarinen, Tampere University, Tampere, Finland
### Abstract
> Threshold signatures improve both availability and security of digital signatures by splitting the signing key into N shares handed out to different parties. Later on, any subset of at least T parties can cooperate to produce a signature on a given message. While threshold signatures have been extensively studied in the pre-quantum setting, they remain sparse from quantum-resilient assumptions.
> 
> We present the first efficient lattice-based threshold signatures with signature size 13 KiB and communication cost 40 KiB per user, supporting a threshold size as large as 1024 signers. We provide an accompanying high performance implementation. The security of the scheme is based on the same assumptions as Dilithium, a signature recently selected by NIST for standardisation which, as far as we know, cannot easily be made threshold efficiently.
> 
> All operations used during signing are due to symmetric primitives and simple lattice operations; in particular our scheme does not need heavy tools such as threshold fully homomorphic encryption or homomorphic trapdoor commitments as in prior constructions. The key technical idea is to use one-time additive masks to mitigate the leakage of the partial signing keys through partial signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_8](https://doi.org/10.1007/978-3-031-58723-8_8)
## Lower Bounds for Lattice-Based Compact Functional Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#lower-bounds-for-lattice-based-compact-functional-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#lower-bounds-for-lattice-based-compact-functional-encryption)
### Authors
* Erkan Tairi, DIENS, École normale supérieure, CNRS, Inria, PSL University, Paris, France
* Akin Ünal, ISTA, Klosterneuburg, Austria
### Abstract
> Functional encryption (FE) is a primitive where the holder of a master secret key can control which functions a user can evaluate on encrypted data. It is a powerful primitive that even implies indistinguishability obfuscation (iO), given sufficiently compact ciphertexts (Ananth-Jain, CRYPTO’15 and Bitansky-Vaikuntanathan, FOCS’15). However, despite being extensively studied, there are FE schemes, such as function-hiding inner-product FE (Bishop-Jain-Kowalczyk, AC’15, Abdalla-Catalano-Fiore-Gay-Ursu, CRYPTO’18) and compact quadratic FE (Baltico-Catalano-Fiore-Gay, Lin, CRYPTO’17), that can be only realized using pairings. This raises the question if there are some mathematical barriers that hinder us from realizing these FE schemes from other assumptions.
> 
> In this paper, we study the difficulty of constructing lattice-based compact FE. We generalize the impossibility results of Ünal (EC’20) for lattice-based function-hiding FE, and extend it to the case of compact FE. Concretely, we prove lower bounds for lattice-based compact FE schemes which meet some (natural) algebraic restrictions at encryption and decryption, and have ciphertexts of linear size and secret keys of minimal degree. We see our results as important indications of why it is hard to construct lattice-based FE schemes for new functionalities, and which mathematical barriers have to be overcome.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_9](https://doi.org/10.1007/978-3-031-58723-8_9)
## Succinct Functional Commitments for Circuits from k-sfLin.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#succinct-functional-commitments-for-circuits-from-k-sflin)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#succinct-functional-commitments-for-circuits-from-k-sflin)
### Authors
* Hoeteck Wee, NTT Research, Sunnyvale, CA, USA
* Hoeteck Wee, ENS, Paris, France
* David J. Wu, University of Texas at Austin, Austin, TX, USA
### Abstract
> A functional commitment allows a user to commit to an input \(\textbf{x}\) and later, open the commitment to an arbitrary function \(\textbf{y}= f(\textbf{x})\). The size of the commitment and the opening should be sublinear in \(\left| \textbf{x} \right| \) and \(\left| f \right| \).
> 
> In this work, we give the first pairing-based functional commitment for arbitrary circuits where the size of the commitment and the size of the opening consist of a constant number of group elements. Security relies on the standard bilateral k-\(\textsf{Lin}\) assumption. This is the first scheme with this level of succinctness from falsifiable bilinear map assumptions (previous approaches required SNARKs for \(\textsf{NP} \)). This is also the first functional commitment scheme for general circuits with \(\textsf{poly}(\lambda )\)-size commitments and openings from any assumption that makes fully black-box use of cryptographic primitives and algorithms. Our construction relies on a new notion of projective chainable commitments which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_10](https://doi.org/10.1007/978-3-031-58723-8_10)
## Time-Lock Puzzles with Efficient Batch Solving.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#time-lock-puzzles-with-efficient-batch-solving)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#time-lock-puzzles-with-efficient-batch-solving)
### Authors
* Jesko Dujmovic, Helmholtz Center for Information Security (CISPA) and Saarbrücken Graduate School of Computer Science, Saarbrücken, Germany
* Rachit Garg, University of Texas at Austin, Austin, TX, USA
* Giulio Malavolta, Bocconi University, Milan, Italy
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
### Abstract
> Time-Lock Puzzles (TLPs) are a powerful tool for concealing messages until a predetermined point in time. When solving multiple puzzles, in many cases, it becomes crucial to have the ability to batch-solve puzzles, i.e., simultaneously open multiple puzzles while working to solve a single one. Unfortunately, all previously known TLP constructions that support batch solving rely on super-polynomially secure indistinguishability obfuscation, making them impractical.
> 
> In light of this challenge, we present novel TLP constructions that offer batch-solving capabilities without using heavy cryptographic hammers. Our proposed schemes are simple and concretely efficient, and they can be constructed based on well-established cryptographic assumptions based on pairings or learning with errors (LWE). Along the way, we introduce new constructions of puncturable key-homomorphic PRFs both in the lattice and in the pairing setting, which may be of independent interest. Our analysis leverages an interesting connection to Hall’s marriage theorem and incorporates an optimized combinatorial approach, enhancing the practicality and feasibility of our TLP schemes.
> 
> Furthermore, we introduce the concept of “rogue-puzzle attacks”, where maliciously crafted puzzle instances may disrupt the batch-solving process of honest puzzles. We then propose constructions of concrete and efficient TLPs designed to prevent such attacks.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_11](https://doi.org/10.1007/978-3-031-58723-8_11)
## Circuit Bootstrapping: Faster and Smaller.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#circuit-bootstrapping-faster-and-smaller)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#circuit-bootstrapping-faster-and-smaller)
### Authors
* Ruida Wang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Zhihao Li, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Xianhui Lu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Benqiang Wei, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Kun Liu, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Kunpeng Wang, Key Laboratory of Cyberspace Security Defense, Institute of Information Engineering, Chinese Academy of Sciences, Beijing, China
* Ruida Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Zhihao Li, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Xianhui Lu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Benqiang Wei, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Kun Liu, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Kunpeng Wang, School of Cyber Security, University of Chinese Academy of Sciences, Beijing, China
* Yundi Wen, Academy of Mathematics and Systems Science, Chinese Academy of Sciences, Beijing, China
### Abstract
> We present a novel circuit bootstrapping algorithm that outperforms the state-of-the-art TFHE method with 9.9\(\times \) speedup and 15.6\(\times \) key size reduction. These improvements can be attributed to two technical contributions. Firstly, we redesigned the circuit bootstrapping workflow to operate exclusively under the ring ciphertext type, which eliminates the need for conversion between LWE and RLWE ciphertexts. Secondly, we improve the LMKC+ blind rotation algorithm by reducing the number of automorphisms, then propose the first automorphism type multi-value functional bootstrapping. These automorphism-based techniques lead to further key size optimization, and are of independent interest besides circuit bootstrapping. Based on our new circuit bootstrapping we can evaluate AES-128 in 26.2 s (single thread), achieving 10.3\(\times \) speedup compared with the state-of-the-art TFHE-based approach.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_12](https://doi.org/10.1007/978-3-031-58723-8_12)
## Registered Functional Encryptions from Pairings.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#registered-functional-encryptions-from-pairings)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#registered-functional-encryptions-from-pairings)
### Authors
* Ziqi Zhu, East China Normal University, Shanghai, China
* Junqing Gong, East China Normal University, Shanghai, China
* Haifeng Qian, East China Normal University, Shanghai, China
* Jiangtao Li, Shanghai University, Shanghai, China
* Kai Zhang, Shanghai University of Electric Power, Shanghai, China
* Junqing Gong, Shanghai Qi Zhi Institute, Shanghai, China
### Abstract
> This work initiates the study of concrete registered functional encryption (Reg-FE) beyond “all-or-nothing” functionalities:
> 
> We build the first Reg-FE for linear function or inner-product evaluation (Reg-IPFE) from pairings. The scheme achieves adaptive IND-security under k-Lin assumption in the prime-order bilinear group. A minor modification yields the first Registered Inner-Product Encryption (Reg-IPE) scheme from k-Lin assumption. Prior work achieves the same security in the generic group model.
> 
> We build the first Reg-FE for quadratic function (Reg-QFE) from pairing. The scheme achieves very selective simulation-based security (SIM-security) under bilateral k-Lin assumption in the prime-order bilinear group. Here, “very selective” means that the adversary claims challenge messages, all quadratic functions to be registered and all corrupted users at the beginning.
> 
> Besides focusing on the compactness of the master public key and helper keys, we also aim for compact ciphertexts in Reg-FE. Let L be the number of slots and n be the input size. Our first Reg-IPFE has weakly compact ciphertexts of size \(O(n\cdot \log L)\) while our second Reg-QFE has compact ciphertexts of size \(O(n+\log L)\). Technically, for our first Reg-IPFE, we employ nested dual-system method within the context of Reg-IPFE; for our second Reg-QFE, we follow Wee’s “IPFE-to-QFE” transformation [TCC’ 20] but devise a set of new techniques that make our pairing-based Reg-IPFE compatible. Along the way, we introduce a new notion named Pre-Constrained Registered IPFE which generalizes slotted Reg-IPFE by constraining the form of functions that can be registered.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_13](https://doi.org/10.1007/978-3-031-58723-8_13)
## Accelerating BGV Bootstrapping for Large p Using Null Polynomials over $\mathbb {Z}_{p^e}$.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#accelerating-bgv-bootstrapping-for-large-p-using-null-polynomials-over-mathbb-z-p-e)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#accelerating-bgv-bootstrapping-for-large-p-using-null-polynomials-over-mathbb-z-p-e)
### Authors
* Shihe Ma, Institute for Network Sciences and Cyberspace, Tsinghua University, Beijing, China
* Tairong Huang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Xiaoyun Wang, Institute for Advanced Study, BNRist, Tsinghua University, Beijing, China
* Anyu Wang, Zhongguancun Laboratory, Beijing, China
* Xiaoyun Wang, Zhongguancun Laboratory, Beijing, China
* Anyu Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, National Financial Cryptography Research Center, Beijing, China
* Xiaoyun Wang, Shandong Institute of Blockchain, Jinan, China
* Xiaoyun Wang, Key Laboratory of Cryptologic Technology and Information Security (Ministry of Education), School of Cyber Science and Technology, Shandong University, Qingdao, China
### Abstract
> The BGV scheme is one of the most popular FHE schemes for computing homomorphic integer arithmetic. The bootstrapping technique of BGV is necessary to evaluate arbitrarily deep circuits homomorphically. However, the BGV bootstrapping performs poorly for large plaintext prime p due to its digit removal procedure exhibiting a computational complexity of at least \(O(\sqrt{p})\). In this paper, we propose optimizations for the digit removal procedure with large p by leveraging the properties of null polynomials over the ring \(\mathbb {Z}_{p^e}\). Specifically, we demonstrate that it is possible to construct low-degree null polynomials based on two observations of the input to the digit removal procedure: 1) the support size of the input can be upper-bounded by \((2B+1)^2\); 2) the size of the lower digits to be removed can be upper-bounded by B. Here B can be controlled within a narrow interval [22, 23] in our parameter selection, making the degree of these null polynomials much smaller than p for large values of p. These low-degree null polynomials can significantly reduce the polynomial degrees during homomorphic digit removal, thereby decreasing both running time and capacity consumption. Theoretically, our optimizations reduce the computational cost of extracting a single digit from \(O(\sqrt{pe})\) (by Chen and Han) or \(O(\sqrt{p}\root 4 \of {e})\) (by Geelen et al.) to \(\min (2B+1,\sqrt{\lceil e/t\rceil (2B+1)})\) for some \(t\ge 1\). We implement and benchmark our method on HElib with \(p=17,127,257,8191\) and 65537 (The code is available at https://github.com/msh086/BGV-Boot-for-Large-p). With our optimized digit removal, we achieve a bootstrapping throughput \(1.38\sim 151\) times that in HElib, with the speedup increasing with the value of p. For \(p=65537\), we accelerate the digit removal step by 80 times and reduce the bootstrapping time from more than 12 h to less than 14 min.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_14](https://doi.org/10.1007/978-3-031-58723-8_14)
## A General Framework for Lattice-Based ABE Using Evasive Inner-Product Functional Encryption.
🌍 **[English](../../../docs/en/Eurocrypt/Eurocrypt[2024-2].md#a-general-framework-for-lattice-based-abe-using-evasive-inner-product-functional-encryption)** | [简体中文](../../../docs/zh-CN/Eurocrypt/Eurocrypt[2024-2].md#a-general-framework-for-lattice-based-abe-using-evasive-inner-product-functional-encryption)
### Authors
* Yao-Ching Hsieh, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Huijia Lin, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
* Ji Luo, Paul G. Allen School of Computer Science & Engineering, University of Washington, Seattle, USA
### Abstract
> We present a general framework for constructing attribute-based encryption (ABE) schemes for arbitrary function class based on lattices from two ingredients, i) a noisy linear secret sharing scheme for the class and ii) a new type of inner-product functional encryption (IPFE) scheme, termed evasive IPFE, which we introduce in this work. We propose lattice-based evasive IPFE schemes and establish their security under simple conditions based on variants of evasive learning with errors (LWE) assumption recently proposed by Wee [EUROCRYPT ’22] and Tsabary [CRYPTO ’22].
> 
> Our general framework is modular and conceptually simple, reducing the task of constructing ABE to that of constructing noisy linear secret sharing schemes, a more lightweight primitive. The versatility of our framework is demonstrated by three new ABE schemes based on variants of the evasive LWE assumption.
> 
> We obtain two ciphertext-policy ABE schemes for all polynomial-size circuits with a predetermined depth bound. One of these schemes has succinct ciphertexts and secret keys, of size polynomial in the depth bound, rather than the circuit size. This eliminates the need for tensor LWE, another new assumption, from the previous state-of-the-art construction by Wee [EUROCRYPT ’22].
> 
> We develop ciphertext-policy and key-policy ABE schemes for deterministic finite automata (DFA) and logspace Turing machines (\(\textsf{L}\)). They are the first lattice-based public-key ABE schemes supporting uniform models of computation. Previous lattice-based schemes for uniform computation were limited to the secret-key setting or offered only weaker security against bounded collusion.
> 
> Lastly, the new primitive of evasive IPFE serves as the lattice-based counterpart of pairing-based IPFE, enabling the application of techniques developed in pairing-based ABE constructions to lattice-based constructions. We believe it is of independent interest and may find other applications.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-58723-8_15](https://doi.org/10.1007/978-3-031-58723-8_15)
