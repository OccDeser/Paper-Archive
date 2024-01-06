# Crypto[2022-2]
## Universally Composable End-to-End Secure Messaging.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#universally-composable-end-to-end-secure-messaging)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#universally-composable-end-to-end-secure-messaging)
### Authors
* Ran Canetti, Boston University, Boston, USA
* Palak Jain, Boston University, Boston, USA
* Marika Swanberg, Boston University, Boston, USA
* Mayank Varia, Boston University, Boston, USA
### Abstract
> We model and analyze the Signal end-to-end messaging protocol within the UC framework. In particular:
> 
> We formulate an ideal functionality that captures end-to-end secure messaging, in a setting with PKI and an untrusted server, against an adversary that has full control over the network and can adaptively and momentarily compromise parties at any time and obtain their entire internal states. In particular our analysis captures the forward secrecy and recovery-of-security properties of Signal and the conditions under which they break.
> 
> We model the main components of the Signal architecture (PKI and long-term keys, the backbone continuous-key-exchange or “asymmetric ratchet,” epoch-level symmetric ratchets, authenticated encryption) as individual ideal functionalities that are realized and analyzed separately and then composed using the UC and Global-State UC theorems.
> 
> We show how the ideal functionalities representing these components can be realized using standard cryptographic primitives under minimal hardness assumptions.
> 
> Our modeling introduces additional innovations that enable arguing about the security of Signal irrespective of the underlying communication medium, as well as secure composition of dynamically generated modules that share state. These features, together with the basic modularity of the UC framework, will hopefully facilitate the use of both Signal-as-a-whole and its individual components within cryptographic applications.
> 
> Two other features of our modeling are the treatment of fully adaptive corruptions, and making minimal use of random oracle abstractions. In particular, we show how to realize continuous key exchange in the plain model, while preserving security against adaptive corruptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_1](https://doi.org/10.1007/978-3-031-15979-4_1)
## On the Insider Security of MLS.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#on-the-insider-security-of-mls)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#on-the-insider-security-of-mls)
### Authors
* Joël Alwen, AWS Wickr, New York, USA
* Marta Mularczyk, AWS Wickr, New York, USA
* Daniel Jost, New York University, New York, USA
### Abstract
> The Messaging Layer Security (MLS) protocol is an open standard for end-to-end (E2E) secure group messaging being developed by the IETF, poised for deployment to consumers, industry, and government. It is designed to provide E2E privacy and authenticity for messages in long-lived sessions whenever possible, despite the participation (at times) of malicious insiders that can adaptively interact with the PKI at will, actively deviate from the protocol, leak honest parties’ states, and fully control the network. The core of the MLS protocol (from which it inherits essentially all of its efficiency and security properties) is a Continuous Group Key Agreement (CGKA) protocol. It provides asynchronous E2E group management by allowing group members to agree on a fresh independent symmetric key after every change to the group’s state (e.g. when someone joins/leaves the group).
> 
> In this work, we make progress towards a precise understanding of the insider security of MLS (Draft 12). On the theory side, we overcome several subtleties to formulate the first notion of insider security for CGKA (or group messaging). Next, we isolate the core components of MLS to obtain a CGKA protocol we dub Insider Secure TreeKEM (ITK). Finally, we give a rigorous security proof for ITK. In particular, this work also initiates the study of insider secure CGKA and group messaging protocols. Along the way we give three new (very practical) attacks on MLS and corresponding fixes. (Those fixes have now been included into the standard.) We also describe a second attack against MLS-like CGKA protocols proven secure under all previously considered security notions (including those designed specifically to analyze MLS). These attacks highlight the pitfalls in simplifying security notions even in the name of tractability.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_2](https://doi.org/10.1007/978-3-031-15979-4_2)
## Lattice-Based Zero-Knowledge Proofs and Applications: Shorter, Simpler, and More General.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#lattice-based-zero-knowledge-proofs-and-applications-shorter-simpler-and-more-general)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#lattice-based-zero-knowledge-proofs-and-applications-shorter-simpler-and-more-general)
### Authors
* Vadim Lyubashevsky, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, IBM Research Europe, Ruschlikon, Switzerland
* Maxime Plançon, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zurich, Switzerland
* Maxime Plançon, ETH Zurich, Zurich, Switzerland
### Abstract
> We present a much-improved practical protocol, based on the hardness of Module-SIS and Module-LWE problems, for proving knowledge of a short vector \(\vec s\) satisfying \(A\vec s=\vec t\bmod q\). The currently most-efficient technique for constructing such a proof works by showing that the \(\ell _\infty \) norm of \(\vec s\) is small. It creates a commitment to a polynomial vector \(\textbf{m}\) whose CRT coefficients are the coefficients of \(\vec s\) and then shows that (1) \(A\cdot \textsf{CRT}(\textbf{m})=\vec t\bmod \,q\) and (2) in the case that we want to prove that the \(\ell _\infty \) norm is at most 1, the polynomial product \((\textbf{m}- \boldsymbol{1})\cdot \textbf{m}\cdot (\textbf{m}+\boldsymbol{1})\) equals to 0. While these schemes are already quite practical, the requirement of using the CRT embedding and only being naturally adapted to proving the \(\ell _\infty \)-norm, somewhat hinders the efficiency of this approach.
> 
> In this work, we show that there is a more direct and more efficient way to prove that the coefficients of \(\vec s\) have a small \(\ell _2\) norm which does not require an equivocation with the \(\ell _\infty \) norm, nor any conversion to the CRT representation. We observe that the inner product between two vectors \(\vec r\) and \(\vec s\) can be made to appear as a coefficient of a product (or sum of products) between polynomials which are functions of \(\vec r\) and \(\vec s\). Thus, by using a polynomial product proof system and hiding all but one coefficient, we are able to prove knowledge of the inner product of two vectors (or of a vector with itself) modulo q. Using a cheap, “approximate range proof”, one can then lift the proof to be over \(\mathbb {Z}\) instead of \(\mathbb {Z}_q\). Our protocols for proving short norms work over all (interesting) polynomial rings, but are particularly efficient for rings like \(\mathbb {Z}[X]/(X^n+1)\) in which the function relating the inner product of vectors and polynomial products happens to be a “nice” automorphism.
> 
> The new proof system can be plugged into constructions of various lattice-based privacy primitives in a black-box manner. As examples, we instantiate a verifiable encryption scheme and a group signature scheme which are more than twice as compact as the previously best solutions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_3](https://doi.org/10.1007/978-3-031-15979-4_3)
## Lattice-Based SNARKs: Publicly Verifiable, Preprocessing, and Recursively Composable - (Extended Abstract).
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#lattice-based-snarks-publicly-verifiable-preprocessing-and-recursively-composable-extended-abstract)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#lattice-based-snarks-publicly-verifiable-preprocessing-and-recursively-composable-extended-abstract)
### Authors
* Martin R. Albrecht, Royal Holloway, University of London, Egham, UK
* Valerio Cini, AIT Austrian Institute of Technology, Seibersdorf, Austria
* Russell W. F. Lai, Aalto University, Espoo, Finland
* Giulio Malavolta, Max Planck Institute for Security and Privacy, Bochum, Germany
* Sri AravindaKrishnan Thyagarajan, Carnegie Mellon University, Pittsburgh, USA
### Abstract
> A succinct non-interactive argument of knowledge (SNARK) allows a prover to produce a short proof that certifies the veracity of a certain NP-statement. In the last decade, a large body of work has studied candidate constructions that are secure against quantum attackers. Unfortunately, no known candidate matches the efficiency and desirable features of (pre-quantum) constructions based on bilinear pairings.
> 
> In this work, we make progress on this question. We propose the first lattice-based SNARK that simultaneously satisfies many desirable properties: It (i) is tentatively post-quantum secure, (ii) is publicly-verifiable, (iii) has a logarithmic-time verifier and (iv) has a purely algebraic structure making it amenable to efficient recursive composition. Our construction stems from a general technical toolkit that we develop to translate pairing-based schemes to lattice-based ones. At the heart of our SNARK is a new lattice-based vector commitment (VC) scheme supporting openings to constant-degree multivariate polynomial maps, which is a candidate solution for the open problem of constructing VC schemes with openings to beyond linear functions. However, the security of our constructions is based on a new family of lattice-based computational assumptions which naturally generalises the standard Short Integer Solution (SIS) assumption.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_4](https://doi.org/10.1007/978-3-031-15979-4_4)
## Practical Sublinear Proofs for R1CS from Lattices.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#practical-sublinear-proofs-for-r1cs-from-lattices)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#practical-sublinear-proofs-for-r1cs-from-lattices)
### Authors
* Ngoc Khanh Nguyen, IBM Research Europe, Rüschlikon, Switzerland
* Gregor Seiler, IBM Research Europe, Rüschlikon, Switzerland
* Ngoc Khanh Nguyen, ETH Zurich, Zürich, Switzerland
### Abstract
> We propose a practical sublinear-size zero-knowledge proof system for Rank-1 Constraint Satisfaction (R1CS) based on lattices. The proof size scales asymptotically with the square root of the witness size. Concretely, the size becomes 2–3 times smaller than Ligero (ACM CCS 2017), which also exhibits square root scaling, for large instances of R1CS. At the core lies an interactive variant of the Schwartz-Zippel Lemma that might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_5](https://doi.org/10.1007/978-3-031-15979-4_5)
## On the Impossibility of Key Agreements from Quantum Random Oracles.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#on-the-impossibility-of-key-agreements-from-quantum-random-oracles)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#on-the-impossibility-of-key-agreements-from-quantum-random-oracles)
### Authors
* Per Austrin, KTH Royal Institute of Technology, Stockholm, Sweden
* Hao Chung, Carnegie Mellon University, Pittsburgh, USA
* Kai-Min Chung, Academia Sinica, Taipei, Taiwan
* Shiuan Fu, Academia Sinica, Taipei, Taiwan
* Yao-Ting Lin, Academia Sinica, Taipei, Taiwan
* Mohammad Mahmoody, University of Virginia, Charlottesville, USA
### Abstract
> We study the following question, first publicly posed by Hosoyamada and Yamakawa in 2018. Can parties \(\textsf{A},\textsf{B}\) with quantum computing power and classical communication rely only on a random oracle (that can be queried in quantum superposition) to agree on a key that is private from eavesdroppers?
> 
> We make the first progress on the question above and prove the following.
> 
> When only one of the parties \(\textsf{A}\) is classical and the other party \(\textsf{B}\) is quantum powered, as long as they ask a total of d oracle queries and agree on a key with probability 1, then there is always a way to break the key agreement by asking \(O(d^2)\) number of classical oracle queries.
> 
> When both parties can make quantum queries to the random oracle, we introduce a natural conjecture, which if true would imply attacks with \({\text {poly}}(d)\) classical queries to the random oracle. Our conjecture, roughly speaking, states that the multiplication of any two degree-d real-valued polynomials over the Boolean hypercube of influence at most \(\delta =1/{\text {poly}}(d)\) is nonzero. We then prove our conjecture for exponentially small influences, which leads to an (unconditional) classical \(2^{O(md)}\)-query attack on any such key agreement protocol, where m is the oracle’s output length.
> 
> Since our attacks are classical, we then ask whether it is always possible to find classical attacks on key agreements with imperfect completeness in the quantum random oracle model. We prove a barrier for this approach, by showing that if the folklore “Simulation Conjecture” (first formally stated by Aaronson and Ambainis in 2009) about the possibility of simulating efficient-query quantum algorithms using efficient-query classical algorithms is false, then there is in fact such a secure key agreement in the quantum random oracle model that cannot be broken classically.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_6](https://doi.org/10.1007/978-3-031-15979-4_6)
## Succinct Classical Verification of Quantum Computation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#succinct-classical-verification-of-quantum-computation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#succinct-classical-verification-of-quantum-computation)
### Authors
* James Bartusek, UC Berkeley, Berkeley, USA
* Fermi Ma, UC Berkeley, Berkeley, USA
* Yael Tauman Kalai, Microsoft Research and MIT, Cambridge, USA
* Alex Lombardi, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
* Lisa Yang, MIT, Cambridge, USA
* Fermi Ma, Simons Institute, Berkeley, USA
* Giulio Malavolta, MPI-SP, Bochum, Germany
* Thomas Vidick, Caltech, Pasadena, USA
### Abstract
> We construct a classically verifiable succinct interactive argument for quantum computation (BQP) with communication complexity and verifier runtime that are poly-logarithmic in the runtime of the BQP computation (and polynomial in the security parameter). Our protocol is secure assuming the post-quantum security of indistinguishability obfuscation (iO) and Learning with Errors (LWE). This is the first succinct argument for quantum computation in the plain model; prior work (Chia-Chung-Yamakawa, TCC ’20) requires both a long common reference string and non-black-box use of a hash function modeled as a random oracle.
> 
> At a technical level, we revisit the framework for constructing classically verifiable quantum computation (Mahadev, FOCS ’18). We give a self-contained, modular proof of security for Mahadev’s protocol, which we believe is of independent interest. Our proof readily generalizes to a setting in which the verifier’s first message (which consists of many public keys) is compressed. Next, we formalize this notion of compressed public keys; we view the object as a generalization of constrained/programmable PRFs and instantiate it based on indistinguishability obfuscation. Finally, we compile the above protocol into a fully succinct argument using a (sufficiently composable) succinct argument of knowledge for NP. Using our framework, we achieve several additional results, including
> 
> Succinct arguments for QMA (given multiple copies of the witness),
> 
> Succinct non-interactive arguments for BQP (or QMA) in the quantum random oracle model, and
> 
> Succinct batch arguments for BQP (or QMA) assuming post-quantum LWE (without iO).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_7](https://doi.org/10.1007/978-3-031-15979-4_7)
## On the Feasibility of Unclonable Encryption, and More.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#on-the-feasibility-of-unclonable-encryption-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#on-the-feasibility-of-unclonable-encryption-and-more)
### Authors
* Prabhanjan Ananth, University of California, Santa Barbara, CA, USA
* Fatih Kaleoglu, University of California, Santa Barbara, CA, USA
* Xingjian Li, Tsinghua University, Beijing, China
* Qipeng Liu, Simons Institute for the Theory of Computing, Berkeley, CA, USA
* Mark Zhandry, NTT Research, Palo Alto, CA, USA
* Mark Zhandry, Princeton University, Princeton, NJ, USA
### Abstract
> Unclonable encryption, first introduced by Broadbent and Lord (TQC’20), is a one-time encryption scheme with the following security guarantee: any non-local adversary \((\mathcal {A},\mathcal {B},\mathcal {C})\) cannot simultaneously distinguish encryptions of two equal length messages. This notion is termed as unclonable indistinguishability. Prior works focused on achieving a weaker notion of unclonable encryption, where we required that any non-local adversary \((\mathcal {A},\mathcal {B},\mathcal {C})\) cannot simultaneously recover the entire message m. Seemingly innocuous, understanding the feasibility of encryption schemes satisfying unclonable indistinguishability (even for 1-bit messages) has remained elusive.
> 
> We make progress towards establishing the feasibility of unclonable encryption.
> 
> We show that encryption schemes satisfying unclonable indistinguishability exist unconditionally in the quantum random oracle model.
> 
> Towards understanding the necessity of oracles, we present a negative result stipulating that a large class of encryption schemes cannot satisfy unclonable indistinguishability.
> 
> Finally, we also establish the feasibility of another closely related primitive: copy-protection for single-bit output point functions. Prior works only established the feasibility of copy-protection for multi-bit output point functions or they achieved constant security error for single-bit output point functions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_8](https://doi.org/10.1007/978-3-031-15979-4_8)
## Shorter Hash-and-Sign Lattice-Based Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#shorter-hash-and-sign-lattice-based-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#shorter-hash-and-sign-lattice-based-signatures)
### Authors
* Thomas Espitau, NTT Corporation, Tokyo, Japan
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
* Alexandre Wallet, IRISA, Univ Rennes 1, Inria, Bretagne-Atlantique Center, Rennes, France
* Yang Yu, BNRist, Tsinghua University, Beijing, China
* Yang Yu, National Financial Cryptography Research Center, Beijing, China
### Abstract
> Lattice-based digital signature schemes following the hash-and-sign design paradigm of Gentry, Peikert and Vaikuntanathan (GPV) tend to offer an attractive level of efficiency, particularly when instantiated with structured compact trapdoors. In particular, NIST postquantum finalist Falcon is both quite fast for signing and verification and quite compact: NIST notes that it has the smallest bandwidth (as measured in combined size of public key and signature) of all round 2 digital signature candidates. Nevertheless, while Falcon–512, for instance, compares favorably to ECDSA–384 in terms of speed, its signatures are well over 10 times larger. For applications that store large number of signatures, or that require signatures to fit in prescribed packet sizes, this can be a critical limitation.
> 
> In this paper, we explore several approaches to further improve the size of hash-and-sign lattice-based signatures, particularly instantiated over NTRU lattices like Falcon and its recent variant Mitaka. In particular, while GPV signatures are usually obtained by sampling lattice points according to some spherical discrete Gaussian distribution, we show that it can be beneficial to sample instead according to a suitably chosen ellipsoidal discrete Gaussian: this is because only half of the sampled Gaussian vector is actually output as the signature, while the other half is recovered during verification. Making the half that actually occurs in signatures shorter reduces signature size at essentially no security loss (in a suitable range of parameters). Similarly, we show that reducing the modulus q with respect to which signatures are computed can improve signature size as well as verification key size almost “for free”; this is particularly true for constructions like Falcon and Mitaka that do not make substantial use of NTT-based multiplication (and rely instead on transcendental FFT). Finally, we show that the Gaussian vectors in signatures can be represented in a more compact way with appropriate coding-theoretic techniques, improving signature size by an additional 7 to 14%. All in all, we manage to reduce the size of, e.g., Falcon signatures by 30–40% at the cost of only 4–6 bits of Core-SVP security.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_9](https://doi.org/10.1007/978-3-031-15979-4_9)
## MuSig-L: Lattice-Based Multi-signature with Single-Round Online Phase.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#musig-l-lattice-based-multi-signature-with-single-round-online-phase)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#musig-l-lattice-based-multi-signature-with-single-round-online-phase)
### Authors
* Cecilia Boschini, Technion, Haifa, Israel
* Cecilia Boschini, Reichman University, Herzliya, Israel
* Akira Takahashi, Aarhus University, Aarhus, Denmark
* Mehdi Tibouchi, NTT Corporation, Tokyo, Japan
### Abstract
> Multi-signatures are protocols that allow a group of signers to jointly produce a single signature on the same message. In recent years, a number of practical multi-signature schemes have been proposed in the discrete-log setting, such as MuSig2 (CRYPTO’21) and DWMS (CRYPTO’21). The main technical challenge in constructing a multi-signature scheme is to achieve a set of several desirable properties, such as (1) security in the plain public-key (PPK) model, (2) concurrent security, (3) low online round complexity, and (4) key aggregation. However, previous lattice-based, post-quantum counterparts to Schnorr multi-signatures fail to satisfy these properties.
> 
> In this paper, we introduce MuSig-L, a lattice-based multi-signature scheme simultaneously achieving these design goals for the first time. Unlike the recent, round-efficient proposal of Damgård et al. (PKC’21), which had to rely on lattice-based trapdoor commitments, we do not require any additional primitive in the protocol, while being able to prove security from the standard module-SIS and LWE assumptions. The resulting output signature of our scheme therefore looks closer to the usual Fiat–Shamir-with-abort signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_10](https://doi.org/10.1007/978-3-031-15979-4_10)
## A New Framework for More Efficient Round-Optimal Lattice-Based (Partially) Blind Signature via Trapdoor Sampling.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#a-new-framework-for-more-efficient-round-optimal-lattice-based-partially-blind-signature-via-trapdoor-sampling)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#a-new-framework-for-more-efficient-round-optimal-lattice-based-partially-blind-signature-via-trapdoor-sampling)
### Authors
* Rafael del Pino, PQShield SAS, Paris, France
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shuichi Katsumata, PQShield Ltd., Oxford, UK
### Abstract
> Blind signatures, proposed by Chaum (CRYPTO’82), are interactive protocols between a signer and a user, where a user can obtain a signature without revealing the message to be signed. Recently, Hauck et al. (EUROCRYPT’20) observed that all efficient lattice-based blind signatures following the blueprint of the original blind signature by Rükert (ASIACRYPT’10) have a flawed security proof. This puts us in a situation where all known lattice-based blind signatures have at least two of the following drawbacks: heuristic security; 1 MB or more signature size; only supporting bounded polynomially many signatures, or being based on non-standard assumptions.
> 
> In this work, we construct the first round-optimal (i.e., two-round) lattice-based blind signature with a signature size roughly 100 KB that supports unbounded polynomially many signatures and is provably secure under standard assumptions. Even if we allow non-standard assumptions and more rounds, ours provide the shortest signature size while simultaneously supporting unbounded polynomially many signatures. The main idea of our work is revisiting the generic blind signature construction by Fischlin (CRYPTO’06) and optimizing the commit-then-open proof using techniques tailored to lattices. Our blind signature is also the first construction to have a formal security proof in the quantum random oracle model. Finally, our blind signature extends naturally to partially blind signatures, where the user and signer can include an agreed-upon public string in the message.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_11](https://doi.org/10.1007/978-3-031-15979-4_11)
## Ofelimos: Combinatorial Optimization via Proof-of-Useful-Work - A Provably Secure Blockchain Protocol.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#ofelimos-combinatorial-optimization-via-proof-of-useful-work-a-provably-secure-blockchain-protocol)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#ofelimos-combinatorial-optimization-via-proof-of-useful-work-a-provably-secure-blockchain-protocol)
### Authors
* Matthias Fitzi, IOHK, Singapore, Singapore
* Aggelos Kiayias, IOHK, Singapore, Singapore
* Giorgos Panagiotakos, IOHK, Singapore, Singapore
* Alexander Russell, IOHK, Singapore, Singapore
* Aggelos Kiayias, University of Edinburgh, Edinburgh, UK
* Alexander Russell, University of Connecticut, Storrs, USA
### Abstract
> Minimizing the energy cost and carbon footprint of the Bitcoin blockchain and related protocols is one of the most widely identified open questions in the cryptocurrency space. Substituting the proof-of-work (PoW) primitive in Nakamoto’s longest-chain protocol with a proof of useful work (PoUW) has been long theorized as an ideal solution in many respects but, to this day, the concept still lacks a convincingly secure realization.
> 
> In this work we put forth Ofelimos, a novel PoUW-based blockchain protocol whose consensus mechanism simultaneously realizes a decentralized optimization-problem solver. Our protocol is built around a novel local search algorithm, which we call Doubly Parallel Local Search (DPLS), that is especially crafted to suit implementation as the PoUW component of our blockchain protocol. We provide a thorough security analysis of our protocol and additionally present metrics that reflect the usefulness of the system. DPLS can be used to implement variants of popular local search algorithms such as WalkSAT that are used for real world combinatorial optimization tasks. In this way, our work paves the way for safely using blockchain systems as generic optimization engines for a variety of hard optimization problems for which a publicly verifiable solution is desired.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_12](https://doi.org/10.1007/978-3-031-15979-4_12)
## Practical Statistically-Sound Proofs of Exponentiation in Any Group.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#practical-statistically-sound-proofs-of-exponentiation-in-any-group)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#practical-statistically-sound-proofs-of-exponentiation-in-any-group)
### Authors
* Charlotte Hoffmann, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Krzysztof Pietrzak, Institute of Science and Technology Austria, Klosterneuburg, Austria
* Pavel Hubáček, Faculty of Mathematics and Physics, Charles University, Prague, Czech Republic
* Chethan Kamath, Tel Aviv University, Tel Aviv, Israel
* Karen Klein, ETH Zurich, Zurich, Switzerland
### Abstract
> A proof of exponentiation (PoE) in a group \({\mathbb {G}}\) of unknown order allows a prover to convince a verifier that a tuple \((x,q,T,y)\in {\mathbb {G}}\times {\mathbb {N}}\times {\mathbb {N}}\times {\mathbb {G}}\) satisfies \(x^{q^T}=y\). This primitive has recently found exciting applications in the constructions of verifiable delay functions and succinct arguments of knowledge. The most practical PoEs only achieve soundness either under computational assumptions, i.e., they are arguments (Wesolowski, Journal of Cryptology 2020), or in groups that come with the promise of not having any small subgroups (Pietrzak, ITCS 2019). The only statistically-sound PoE in general groups of unknown order is due to Block et al. (CRYPTO 2021), and can be seen as an elaborate parallel repetition of Pietrzak’s PoE: to achieve \(\lambda \) bits of security, say \(\lambda =80\), the number of repetitions required (and thus the blow-up in communication) is as large as \(\lambda \).
> 
> In this work, we propose a statistically-sound PoE for the case where the exponent q is the product of all primes up to some bound B. We show that, in this case, it suffices to run only \(\lambda /\log (B)\) parallel instances of Pietrzak’s PoE, which reduces the concrete proof-size compared to Block et al. by an order of magnitude. Furthermore, we show that in the known applications where PoEs are used as a building block such structured exponents are viable. Finally, we also discuss batching of our PoE, showing that many proofs (for the same \(\mathbb {G}\) and q but different x and T) can be batched by adding only a single element to the proof per additional statement.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_13](https://doi.org/10.1007/978-3-031-15979-4_13)
## Formalizing Delayed Adaptive Corruptions and the Security of Flooding Networks.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#formalizing-delayed-adaptive-corruptions-and-the-security-of-flooding-networks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#formalizing-delayed-adaptive-corruptions-and-the-security-of-flooding-networks)
### Authors
* Christian Matt, Concordium, Zurich, Switzerland
* Jesper Buus Nielsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
* Søren Eller Thomsen, Concordium Blockchain Research Center, Aarhus University, Aarhus, Denmark
### Abstract
> Many decentralized systems rely on flooding protocols for message dissemination. In such a protocol, the sender of a message sends it to a randomly selected set of peers. These peers again send the message to their randomly selected peers, until every network participant has received the message. This type of protocols clearly fail in face of an adaptive adversary who can simply corrupt all peers of the sender and thereby prevent the message from being delivered. Nevertheless, flooding protocols are commonly used within protocols that aim to be cryptographically secure, most notably in blockchain protocols. While it is possible to revert to static corruptions, this gives unsatisfactory security guarantees, especially in the setting of a blockchain that is supposed to run for an extended period of time.
> 
> To be able to provide meaningful security guarantees in such settings, we give precise semantics to what we call \(\delta \)-delayed adversaries in the Universal Composability (UC) framework. Such adversaries can adaptively corrupt parties, but there is a delay of time \(\delta \) from when an adversary decides to corrupt a party until they succeed in overtaking control of the party. Within this model, we formally prove the intuitive result that flooding protocols are secure against \(\delta \)-delayed adversaries when \(\delta \) is at least the time it takes to send a message from one peer to another plus the time it takes the recipient to resend the message. To this end, we show how to reduce the adaptive setting with a \(\delta \)-delayed adversary to a static experiment with an Erdős-Rényi graph. Using the established theory of Erdős-Rényi graphs, we provide upper bounds on the propagation time of the flooding functionality for different neighborhood sizes of the gossip network. More concretely, we show the following for security parameter \(\kappa \), point-to-point channels with delay at most \(\varDelta \), and n parties in total, with a sufficiently delayed adversary that can corrupt any constant fraction of the parties: If all parties send to \(\varOmega (\kappa )\) parties on average, then we can realize a flooding functionality with maximal delay \(\mathcal {O}\bigl (\varDelta \cdot \log (n) \bigr )\); and if all parties send to \(\varOmega \bigl ( \sqrt{\kappa n} \bigr )\) parties on average, we can realize a flooding functionality with maximal delay \(\mathcal {O}(\varDelta )\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_14](https://doi.org/10.1007/978-3-031-15979-4_14)
## Batch Arguments for sfNP and More from Standard Bilinear Group Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#batch-arguments-for-sfnp-and-more-from-standard-bilinear-group-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#batch-arguments-for-sfnp-and-more-from-standard-bilinear-group-assumptions)
### Authors
* Brent Waters, University of Texas at Austin, Austin, TX, USA
* David J. Wu, University of Texas at Austin, Austin, TX, USA
* Brent Waters, NTT Research, Sunnyvale, CA, USA
### Abstract
> Non-interactive batch arguments for \(\textsf{NP}\) provide a way to amortize the cost of \(\textsf{NP}\) verification across multiple instances. They enable a prover to convince a verifier of multiple \(\textsf{NP}\) statements with communication much smaller than the total witness length and verification time much smaller than individually checking each instance.
> 
> In this work, we give the first construction of a non-interactive batch argument for \(\textsf{NP}\) from standard assumptions on groups with bilinear maps (specifically, from either the subgroup decision assumption in composite-order groups or from the \(k\)-\(\textsf{Lin}\) assumption in prime-order groups for any \(k \ge 1\)). Previously, batch arguments for \(\textsf{NP}\) were only known from \(\textsf{LWE}\), or a combination of multiple assumptions, or from non-standard/non-falsifiable assumptions. Moreover, our work introduces a new direct approach for batch verification and avoids heavy tools like correlation-intractable hash functions or probabilistically-checkable proofs common to previous approaches.
> 
> As corollaries to our main construction, we obtain the first publicly-verifiable non-interactive delegation scheme for RAM programs (i.e., a succinct non-interactive argument (SNARG) for \(\textsf{P}\)) with a CRS of sublinear size (in the running time of the RAM program), as well as the first aggregate signature scheme (supporting bounded aggregation) from standard assumptions on bilinear maps.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_15](https://doi.org/10.1007/978-3-031-15979-4_15)
## Breaking Rainbow Takes a Weekend on a Laptop.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#breaking-rainbow-takes-a-weekend-on-a-laptop)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#breaking-rainbow-takes-a-weekend-on-a-laptop)
### Authors
* Ward Beullens, IBM Research, Zurich, Switzerland
### Abstract
> This work introduces new key recovery attacks against the Rainbow signature scheme, which is one of the three finalist signature schemes still in the NIST Post-Quantum Cryptography standardization project. The new attacks outperform previously known attacks for all the parameter sets submitted to NIST and make a key-recovery practical for the SL 1 parameters. Concretely, given a Rainbow public key for the SL 1 parameters of the second-round submission, our attack returns the corresponding secret key after on average 53 h (one weekend) of computation time on a standard laptop.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_16](https://doi.org/10.1007/978-3-031-15979-4_16)
## Some Easy Instances of Ideal-SVP and Implications on the Partial Vandermonde Knapsack Problem.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#some-easy-instances-of-ideal-svp-and-implications-on-the-partial-vandermonde-knapsack-problem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#some-easy-instances-of-ideal-svp-and-implications-on-the-partial-vandermonde-knapsack-problem)
### Authors
* Katharina Boudgoust, Aarhus University, Aarhus, Denmark
* Erell Gachon, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
* Alice Pellet-Mary, Univ. Bordeaux, CNRS, INRIA, Bordeaux INP, IMB, UMR 5251, 33400, Talence, France
### Abstract
> In this article, we generalize the works of Pan et al. (Eurocrypt’21) and Porter et al. (ArXiv’21) and provide a simple condition under which an ideal lattice defines an easy instance of the shortest vector problem. Namely, we show that the more automorphisms stabilize the ideal, the easier it is to find a short vector in it. This observation was already made for prime ideals in Galois fields, and we generalize it to any ideal (whose prime factors are not ramified) of any number field.
> 
> We then provide a cryptographic application of this result by showing that particular instances of the partial Vandermonde knapsack problem, also known as partial Fourier recovery problem, can be solved classically in polynomial time. As a proof of concept, we implemented our attack and managed to solve those particular instances for concrete parameter settings proposed in the literature. For random instances, we can halve the lattice dimension with non-negligible probability.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_17](https://doi.org/10.1007/978-3-031-15979-4_17)
## On Codes and Learning with Errors over Function Fields.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#on-codes-and-learning-with-errors-over-function-fields)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#on-codes-and-learning-with-errors-over-function-fields)
### Authors
* Maxime Bombar, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Alain Couvreur, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Thomas Debris-Alazard, LIX, CNRS UMR 7161, École Polytechnique, Institut Polytechnique de Paris, 1 rue Honoré d’Estienne d’Orves, 91120, Palaiseau Cedex, France
* Maxime Bombar, Inria Saclay, Palaiseau, France
* Alain Couvreur, Inria Saclay, Palaiseau, France
* Thomas Debris-Alazard, Inria Saclay, Palaiseau, France
### Abstract
> It is a long standing open problem to find search to decision reductions for structured versions of the decoding problem of linear codes. Such results in the lattice-based setting have been carried out using number fields: Polynomial–LWE, Ring–\(\textsf{LWE}\), Module–\(\textsf{LWE}\) and so on. We propose a function field version of the \(\textsf{LWE}\) problem. This new framework leads to another point of view on structured codes, e.g. quasi-cyclic codes, strengthening the connection between lattice-based and code-based cryptography. In particular, we obtain the first search to decision reduction for structured codes. Following the historical constructions in lattice–based cryptography, we instantiate our construction with function fields analogues of cyclotomic fields, namely Carlitz extensions, leading to search to decision reductions on various versions of Ring-\(\textsf{LPN}\), which have applications to secure multiparty computation and to an authentication protocol.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_18](https://doi.org/10.1007/978-3-031-15979-4_18)
## Syndrome Decoding in the Head: Shorter Signatures from Zero-Knowledge Proofs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#syndrome-decoding-in-the-head-shorter-signatures-from-zero-knowledge-proofs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#syndrome-decoding-in-the-head-shorter-signatures-from-zero-knowledge-proofs)
### Authors
* Thibauld Feneuil, CryptoExperts, Paris, France
* Matthieu Rivain, CryptoExperts, Paris, France
* Thibauld Feneuil, Sorbonne Université, CNRS, INRIA, Institut de Mathématiques de Jussieu-Paris Rive Gauche, Ouragan, Paris, France
* Antoine Joux, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
### Abstract
> Zero-knowledge proofs of knowledge are useful tools to design signature schemes. The ongoing effort to build a quantum computer urges the cryptography community to develop new secure cryptographic protocols based on quantum-hard cryptographic problems. One of the few directions is code-based cryptography for which the strongest problem is the syndrome decoding (SD) for random linear codes. This problem is known to be NP-hard and the cryptanalysis state of the art has been stable for many years. A zero-knowledge protocol for this problem was pioneered by Stern in 1993. Since its publication, many articles proposed optimizations, implementation, or variants.
> 
> In this paper, we introduce a new zero-knowledge proof for the syndrome decoding problem on random linear codes. Instead of using permutations like most of the existing protocols, we rely on the MPC-in-the-head paradigm in which we reduce the task of proving the low Hamming weight of the SD solution to proving some relations between specific polynomials. Specifically, we propose a 5-round zero-knowledge protocol that proves the knowledge of a vector x such that \(y=Hx\) and \({\text {wt}}(x)\le w\) and which achieves a soundness error closed to 1/N for an arbitrary N.
> 
> While turning this protocol into a signature scheme, we achieve a signature size of 11–12 KB for 128-bit security when relying on the hardness of the SD problem on binary fields. Using larger fields (like \(\mathbb {F}_{2^8}\)), we can produce fast signatures of around 8 KB. This allows us to outperform Picnic3 and to be competitive with SPHINCS+, both post-quantum signature candidates in the ongoing NIST standardization effort. Moreover, our scheme outperforms all the existing code-based signature schemes for the common “signature size \(+\) public key size” metric.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_19](https://doi.org/10.1007/978-3-031-15979-4_19)
## Beyond the Csiszár-Korner Bound: Best-Possible Wiretap Coding via Obfuscation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#beyond-the-csisz-r-korner-bound-best-possible-wiretap-coding-via-obfuscation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#beyond-the-csisz-r-korner-bound-best-possible-wiretap-coding-via-obfuscation)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Alexis Korb, UCLA, Los Angeles, USA
* Paul Lou, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
### Abstract
> A wiretap coding scheme (Wyner, Bell Syst. Tech. J. 1975) enables Alice to reliably communicate a message m to an honest Bob by sending an encoding c over a noisy channel \(\textsf{ChB}\), while at the same time hiding m from Eve who receives c over another noisy channel \(\textsf{ChE}\).
> 
> Wiretap coding is clearly impossible when \(\textsf{ChB}\) is a degraded version of \(\textsf{ChE}\), in the sense that the output of \(\textsf{ChB}\) can be simulated using only the output of \(\textsf{ChE}\). A classic work of Csiszár and Korner (IEEE Trans. Inf. Theory, 1978) shows that the converse does not hold. This follows from their full characterization of the channel pairs \((\textsf{ChB},\textsf{ChE})\) that enable information-theoretic wiretap coding.
> 
> In this work, we show that in fact the converse does hold when considering computational security; that is, wiretap coding against a computationally bounded Eve is possible if and only if \(\textsf{ChB}\) is not a degraded version of \(\textsf{ChE}\). Our construction assumes the existence of virtual black-box (VBB) obfuscation of specific classes of “evasive” functions that generalize fuzzy point functions, and can be heuristically instantiated using indistinguishability obfuscation. Finally, our solution has the appealing feature of being universal in the sense that Alice’s algorithm depends only on \(\textsf{ChB}\) and not on \(\textsf{ChE}\).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_20](https://doi.org/10.1007/978-3-031-15979-4_20)
## Correlated Pseudorandomness from Expand-Accumulate Codes.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#correlated-pseudorandomness-from-expand-accumulate-codes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#correlated-pseudorandomness-from-expand-accumulate-codes)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Elette Boyle, NTT Research, Sunnyvale, USA
* Geoffroy Couteau, IRIF, Paris, France
* Niv Gilboa, Ben-Gurion University, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Lisa Kohl, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Nicolas Resch, Cryptology Group, CWI Amsterdam, Amsterdam, The Netherlands
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> A pseudorandom correlation generator (PCG) is a recent tool for securely generating useful sources of correlated randomness, such as random oblivious transfers (OT) and vector oblivious linear evaluations (VOLE), with low communication cost.
> 
> We introduce a simple new design for PCGs based on so-called expand-accumulate codes, which first apply a sparse random expander graph to replicate each message entry, and then accumulate the entries by computing the sum of each prefix. Our design offers the following advantages compared to state-of-the-art PCG constructions:
> 
> Competitive concrete efficiency backed by provable security against relevant classes of attacks;
> 
> An offline-online mode that combines near-optimal cache-friendliness with simple parallelization;
> 
> Concretely efficient extensions to pseudorandom correlation functions, which enable incremental generation of new correlation instances on demand, and to new kinds of correlated randomness that include circuit-dependent correlations.
> 
> To further improve the concrete computational cost, we propose a method for speeding up a full-domain evaluation of a puncturable pseudorandom function (PPRF). This is independently motivated by other cryptographic applications of PPRFs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_21](https://doi.org/10.1007/978-3-031-15979-4_21)
## Public-Key Watermarking Schemes for Pseudorandom Functions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#public-key-watermarking-schemes-for-pseudorandom-functions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#public-key-watermarking-schemes-for-pseudorandom-functions)
### Authors
* Rupeng Yang, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Zuoxia Yu, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Man Ho Au, Department of Computer Science, The University of Hong Kong, Hong Kong, China
* Rupeng Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Zuoxia Yu, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Wollongong, NSW, Australia
### Abstract
> A software watermarking scheme can embed a message into a program while preserving its functionality. The embedded message can be extracted later by an extraction algorithm, and no one could remove it without significantly changing the functionality of the program. A watermarking scheme is public key if neither the marking procedure nor the extraction procedure needs a watermarking secret key. Prior constructions of watermarking schemes mainly focus on watermarking pseudorandom functions (PRFs), and the major open problem in this direction is to construct a public-key watermarkable PRF.
> 
> In this work, we solve the open problem via constructing public-key watermarkable PRFs with different trade-offs from various assumptions, ranging from standard lattice assumptions to the existence of indistinguishability obfuscation. To achieve the results, we first construct watermarking schemes in a weaker model, where the extraction algorithm is provided with a “hint” about the watermarked PRF key. Then we upgrade the constructions to standard watermarking schemes using a robust unobfuscatable PRF. We also provide the first construction of robust unobfuscatable PRF in this work, which is of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_22](https://doi.org/10.1007/978-3-031-15979-4_22)
## CHIP and CRISP: Protecting All Parties Against Compromise Through Identity-Binding PAKEs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#chip-and-crisp-protecting-all-parties-against-compromise-through-identity-binding-pakes)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#chip-and-crisp-protecting-all-parties-against-compromise-through-identity-binding-pakes)
### Authors
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Moni Naor, Faculty of Mathematics and Computer Science, Weizmann Institute of Science, Rehovot, Israel
* Shahar Paz, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
* Eyal Ronen, School of Computer Science, Tel Aviv University, Tel Aviv, Israel
### Abstract
> Recent advances in password-based authenticated key exchange (PAKE) protocols can offer stronger security guarantees for globally deployed security protocols. Notably, the OPAQUE protocol [Eurocrypt2018] realizes Strong Asymmetric PAKE (saPAKE), strengthening the protection offered by aPAKE to compromised servers: after compromising an saPAKE server, the adversary still has to perform a full brute-force search to recover any passwords or impersonate users. However, (s)aPAKEs do not protect client storage, and can only be applied in the so-called asymmetric setting, in which some parties, such as servers, do not communicate with each other using the protocol.
> 
> Nonetheless, passwords are also widely used in symmetric settings, where a group of parties share a password and can all communicate (e.g., Wi-Fi with client devices, routers, and mesh nodes; or industrial IoT scenarios). In these settings, the (s)aPAKE techniques cannot be applied, and the state-of-the-art still involves handling plaintext passwords.
> 
> In this work, we propose the notions of (strong) identity-binding PAKEs that improve this situation: they protect against compromise of any party, and can also be applied in the symmetric setting. We propose counterparts to state-of-the-art security notions from the asymmetric setting in the UC model, and construct protocols that provably realize them. Our constructions bind the local storage of all parties to abstract identities, building on ideas from identity-based key exchange, but without requiring a third party.
> 
> Our first protocol, CHIP, generalizes the security of aPAKE protocols to all parties, forcing the adversary to perform a brute-force search to recover passwords or impersonate others. Our second protocol, CRISP, additionally renders any adversarial pre-computation useless, thereby offering saPAKE-like guarantees for all parties, instead of only the server.
> 
> We evaluate prototype implementations of our protocols and show that even though they offer stronger security for real-world use cases, their performance is in line with, or even better than, state-of-the-art protocols.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_23](https://doi.org/10.1007/978-3-031-15979-4_23)
## Password-Authenticated Key Exchange from Group Actions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#password-authenticated-key-exchange-from-group-actions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#password-authenticated-key-exchange-from-group-actions)
### Authors
* Michel Abdalla, DFINITY, Zürich, Switzerland
* Michel Abdalla, DIENS, École normale supérieure, CNRS, PSL University, Paris, France
* Thorsten Eisenhofer, Ruhr-Universität Bochum, Bochum, Germany
* Eike Kiltz, Ruhr-Universität Bochum, Bochum, Germany
* Sabrina Kunzweiler, Ruhr-Universität Bochum, Bochum, Germany
* Doreen Riepel, Ruhr-Universität Bochum, Bochum, Germany
### Abstract
> We present two provably secure password-authenticated key exchange (PAKE) protocols based on a commutative group action. To date the most important instantiation of isogeny-based group actions is given by CSIDH. To model the properties more accurately, we extend the framework of cryptographic group actions (Alamati et al., ASIACRYPT 2020) by the ability of computing the quadratic twist of an elliptic curve. This property is always present in the CSIDH setting and turns out to be crucial in the security analysis of our PAKE protocols.
> 
> Despite the resemblance, the translation of Diffie-Hellman based PAKE protocols to group actions either does not work with known techniques or is insecure (“How not to create an isogeny-based PAKE”, Azarderakhsh et al., ACNS 2020). We overcome the difficulties mentioned in previous work by using a “bit-by-bit” approach, where each password bit is considered separately.
> 
> Our first protocol \(\textsf{X}\text {-}\textsf{GA}\text {-}\textsf{PAKE}_\ell \) can be executed in a single round. Both parties need to send two set elements for each password bit in order to prevent offline dictionary attacks. The second protocol \(\mathsf {Com\text {-}GA\text {-}PAKE}_\ell \) requires only one set element per password bit, but one party has to send a commitment on its message first. We also discuss different optimizations that can be used to reduce the computational cost. We provide comprehensive security proofs for our base protocols and deduce security for the optimized versions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_24](https://doi.org/10.1007/978-3-031-15979-4_24)
## Efficient NIZKs and Signatures from Commit-and-Open Protocols in the QROM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#efficient-nizks-and-signatures-from-commit-and-open-protocols-in-the-qrom)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#efficient-nizks-and-signatures-from-commit-and-open-protocols-in-the-qrom)
### Authors
* Jelle Don, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Christian Majenz, Centrum Wiskunde and Informatica (CWI), Amsterdam, Netherlands
* Serge Fehr, Mathematical Institute, Leiden University, Leiden, Netherlands
* Christian Schaffner, Informatics Institute, University of Amsterdam, Amsterdam, Netherlands
* Christian Majenz, QuSoft, Amsterdam, Netherlands
* Christian Schaffner, QuSoft, Amsterdam, Netherlands
### Abstract
> Commit-and-open \(\Sigma \)-protocols are a popular class of protocols for constructing non-interactive zero-knowledge arguments and digital-signature schemes via the Fiat-Shamir transformation . Instantiated with hash-based commitments, the resulting non-interactive schemes enjoy tight online-extractability in the random oracle model. Online extractability improves the tightness of security proofs for the resulting digital-signature schemes by avoiding lossy rewinding or forking-lemma based extraction.
> 
> In this work, we prove tight online extractability in the quantum random oracle model (QROM), showing that the construction supports post-quantum security. First, we consider the default case where committing is done by element-wise hashing. In a second part, we extend our result to Merkle-tree based commitments. Our results yield a significant improvement of the provable post-quantum security of the digital-signature scheme Picnic.
> 
> Our analysis makes use of a recent framework by Chung et al. [CFHL21] for analysing quantum algorithms in the QROM using purely classical reasoning. Therefore, our results can to a large extent be understood and verified without prior knowledge of quantum information science.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_25](https://doi.org/10.1007/978-3-031-15979-4_25)
## Locally Verifiable Signature and Key Aggregation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#locally-verifiable-signature-and-key-aggregation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#locally-verifiable-signature-and-key-aggregation)
### Authors
* Rishab Goyal, MIT, Cambridge, MA, USA
* Vinod Vaikuntanathan, MIT, Cambridge, MA, USA
### Abstract
> Aggregate signatures (Boneh, Gentry, Lynn, Shacham, Eurocrypt 2003) enable compressing a set of N signatures on N different messages into a short aggregate signature. This reduces the space complexity of storing the signatures from linear in N to a fixed constant (that depends only on the security parameter). However, verifying the aggregate signature requires access to all N messages, resulting in the complexity of verification being at least \(\varOmega (N)\).
> 
> In this work, we introduce the notion of locally verifiable aggregate signatures that enable efficient verification: given a short aggregate signature \(\sigma \) (corresponding to a set \(\mathcal {M}\) of N messages), the verifier can check whether a particular message m is in the set, in time independent of N. Verification does not require knowledge of the entire set \(\mathcal {M}\). We demonstrate many natural applications of locally verifiable aggregate signature schemes: in the context of certificate transparency logs; in blockchains; and for redacting signatures, even when all the original signatures are produced by a single user.
> 
> We provide two constructions of single-signer locally verifiable aggregate signatures, the first based on the RSA assumption and the second on the bilinear Diffie-Hellman inversion assumption, both in the random oracle model.
> 
> As an additional contribution, we introduce the notion of compressing cryptographic keys in identity-based encryption (IBE) schemes, show applications of this notion, and construct an IBE scheme where the secret keys for N identities can be compressed into a single aggregate key, which can then be used to decrypt ciphertexts sent to any of the N identities.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_26](https://doi.org/10.1007/978-3-031-15979-4_26)
## Multimodal Private Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2022-2].md#multimodal-private-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2022-2].md#multimodal-private-signatures)
### Authors
* Khoa Nguyen, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Fuchun Guo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Willy Susilo, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
* Guomin Yang, Institute of Cybersecurity and Cryptology, School of Computing and Information Technology, University of Wollongong, Northfields Avenue, Wollongong, NSW, 2522, Australia
### Abstract
> We introduce Multimodal Private Signature (MPS) - an anonymous signature system that offers a novel accountability feature: it allows a designated opening authority to learn some partial information \(\textsf{op}\) about the signer’s identity \(\textsf{id}\), and nothing beyond. Such partial information can flexibly be defined as \(\textsf{op} = \textsf{id}\) (as in group signatures), or as \(\textsf{op} = \textbf{0}\) (like in ring signatures), or more generally, as \(\textsf{op} = G_j(\textsf{id})\), where \(G_j(\cdot )\) is a certain disclosing function. Importantly, the value of \(\textsf{op}\) is known in advance by the signer, and hence, the latter can decide whether she/he wants to disclose that piece of information. The concept of MPS significantly generalizes the notion of tracing in traditional anonymity-oriented signature primitives, and can enable various new and appealing privacy-preserving applications.
> 
> We formalize the definitions and security requirements for MPS. We next present a generic construction to demonstrate the feasibility of designing MPS in a modular manner and from commonly used cryptographic building blocks (ordinary signatures, public-key encryption and NIZKs). We also provide an efficient construction in the standard model based on pairings, and a lattice-based construction in the random oracle model.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-15979-4_27](https://doi.org/10.1007/978-3-031-15979-4_27)
