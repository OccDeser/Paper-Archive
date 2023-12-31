# Crypto[2019-3]
## Trapdoor Hash Functions and Their Applications.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#trapdoor-hash-functions-and-their-applications)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#trapdoor-hash-functions-and-their-applications)
### Authors
* Nico Döttling, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Sanjam Garg, UC Berkeley, Berkeley, CA, USA
* Yuval Ishai, Technion, Haifa, Israel
* Giulio Malavolta, Carengie Mellon University, Pittsburgh, PA, USA
* Tamer Mour, Weizmann Institute of Science, Rehovot, Israel
* Rafail Ostrovsky, UCLA, Los Angeles, CA, USA
### Abstract
> We introduce a new primitive, called trapdoor hash functions (TDH), which are hash functions \(\mathsf {H}: \{0,1\}^n \rightarrow \{0,1\}^\lambda \) with additional trapdoor function-like properties. Specifically, given an index \(i\in [n]\), TDHs allow for sampling an encoding key \(\mathsf {ek}\) (that hides i) along with a corresponding trapdoor. Furthermore, given \(\mathsf {H}(x)\), a hint value \(\mathsf {E}(\mathsf {ek},x)\), and the trapdoor corresponding to \(\mathsf {ek}\), the \(i^{th}\) bit of x can be efficiently recovered. In this setting, one of our main questions is: How small can the hint value \(\mathsf {E}(\mathsf {ek},x)\) be? We obtain constructions where the hint is only one bit long based on DDH, QR, DCR, or LWE.
> 
> This primitive opens a floodgate of applications for low-communication secure computation. We mainly focus on two-message protocols between a receiver and a sender, with private inputs x and y, resp., where the receiver should learn f(x, y). We wish to optimize the (download) rate of such protocols, namely the asymptotic ratio between the size of the output and the sender’s message. Using TDHs, we obtain:
> 
> 1. The first protocols for (two-message) rate-1 string OT based on DDH, QR, or LWE. This has several useful consequences, such as:
> 
> (a) The first constructions of PIR with communication cost poly-logarithmic in the database size based on DDH or QR. These protocols are in fact rate-1 when considering block PIR.
> 
> (b) The first constructions of a semi-compact homomorphic encryption scheme for branching programs, where the encrypted output grows only with the program length, based on DDH or QR.
> 
> (c) The first constructions of lossy trapdoor functions with input to output ratio approaching 1 based on DDH, QR or LWE.
> 
> (d) The first constant-rate LWE-based construction of a 2-message “statistically sender-private” OT protocol in the plain model.
> 
> 2. The first rate-1 protocols (under any assumption) for n parallel OTs and matrix-vector products from DDH, QR or LWE.
> 
> We further consider the setting where f evaluates a RAM program y with running time \(T\ll |x|\) on x. We obtain the first protocols with communication sublinear in the size of x, namely \(T\cdot \sqrt{|x|}\) or \(T\cdot \root 3 \of {|x|}\), based on DDH or, resp., pairings (and correlated-input secure hash functions).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_1](https://doi.org/10.1007/978-3-030-26954-8_1)
## CCA Security and Trapdoor Functions via Key-Dependent-Message Security.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#cca-security-and-trapdoor-functions-via-key-dependent-message-security)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#cca-security-and-trapdoor-functions-via-key-dependent-message-security)
### Authors
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Takahiro Matsuda, National Institute of Advanced Industrial Science and Technology (AIST), Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
### Abstract
> We study the relationship among public-key encryption (PKE) satisfying indistinguishability against chosen plaintext attacks (IND-CPA security), that against chosen ciphertext attacks (IND-CCA security), and trapdoor functions (TDF). Specifically, we aim at finding a unified approach and some additional requirement to realize IND-CCA secure PKE and TDF based on IND-CPA secure PKE, and show the following two main results.
> 
> As the first main result, we show how to achieve IND-CCA security via a weak form of key-dependent-message (KDM) security. More specifically, we construct an IND-CCA secure PKE scheme based on an IND-CPA secure PKE scheme and a secret-key encryption (SKE) scheme satisfying one-time KDM security with respect to projection functions (projection-KDM security). Projection functions are very simple functions with respect to which KDM security has been widely studied. Since the existence of projection-KDM secure PKE implies that of the above two building blocks, as a corollary of this result, we see that the existence of IND-CCA secure PKE is implied by that of projection-KDM secure PKE.
> 
> As the second main result, we extend the above construction of IND-CCA secure PKE into that of TDF by additionally requiring a mild requirement for each building block. Our TDF satisfies adaptive one-wayness. We can instantiate our TDF based on a wide variety of computational assumptions. Especially, we obtain the first TDF (with adaptive one-wayness) based on the sub-exponential hardness of the constant-noise learning-parity-with-noise (LPN) problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_2](https://doi.org/10.1007/978-3-030-26954-8_2)
## Zero-Knowledge Proofs on Secret-Shared Data via Fully Linear PCPs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#zero-knowledge-proofs-on-secret-shared-data-via-fully-linear-pcps)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#zero-knowledge-proofs-on-secret-shared-data-via-fully-linear-pcps)
### Authors
* Dan Boneh, Stanford University, Stanford, USA
* Henry Corrigan-Gibbs, Stanford University, Stanford, USA
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Niv Gilboa, Ben-Gurion University, Be’er Sheva, Israel
* Yuval Ishai, Technion, Haifa, Israel
### Abstract
> We introduce and study the notion of fully linear probabilistically checkable proof systems. In such a proof system, the verifier can make a small number of linear queries that apply jointly to the input and a proof vector.
> 
> Our new type of proof system is motivated by applications in which the input statement is not fully available to any single verifier, but can still be efficiently accessed via linear queries. This situation arises in scenarios where the input is partitioned or secret-shared between two or more parties, or alternatively is encoded using an additively homomorphic encryption or commitment scheme. This setting appears in the context of secure messaging platforms, verifiable outsourced computation, PIR writing, private computation of aggregate statistics, and secure multiparty computation (MPC). In all these applications, there is a need for fully linear proof systems with short proofs.
> 
> While several efficient constructions of fully linear proof systems are implicit in the interactive proofs literature, many questions about their complexity are open. We present several new constructions of fully linear zero-knowledge proof systems with sublinear proof size for “simple” or “structured” languages. For example, in the non-interactive setting of fully linear PCPs, we show how to prove that an input vector \(x\in {\mathbb {F}}^n\), for a finite field \({\mathbb {F}}\), satisfies a single degree-2 equation with a proof of size \(O(\sqrt{n})\) and \(O(\sqrt{n})\) linear queries, which we show to be optimal. More generally, for languages that can be recognized by systems of constant-degree equations, we can reduce the proof size to \(O(\log n)\) at the cost of \(O(\log n)\) rounds of interaction.
> 
> We use our new proof systems to construct new short zero-knowledge proofs on distributed and secret-shared data. These proofs can be used to improve the performance of the example systems mentioned above.
> 
> Finally, we observe that zero-knowledge proofs on distributed data provide a general-purpose tool for protecting MPC protocols against malicious parties. Applying our short fully linear PCPs to “natural” MPC protocols in the honest-majority setting, we can achieve unconditional protection against malicious parties with sublinear additive communication cost. We use this to improve the communication complexity of recent honest-majority MPC protocols. For instance, using any pseudorandom generator, we obtain a 3-party protocol for Boolean circuits in which the amortized communication cost is only one bit per AND gate per party (compared to 10 bits in the best previous protocol), matching the best known protocols for semi-honest parties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_3](https://doi.org/10.1007/978-3-030-26954-8_3)
## Non-Uniformly Sound Certificates with Applications to Concurrent Zero-Knowledge.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#non-uniformly-sound-certificates-with-applications-to-concurrent-zero-knowledge)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#non-uniformly-sound-certificates-with-applications-to-concurrent-zero-knowledge)
### Authors
* Cody Freitag, Cornell Tech, New York, NY, 10044, USA
* Ilan Komargodski, Cornell Tech, New York, NY, 10044, USA
* Rafael Pass, Cornell Tech, New York, NY, 10044, USA
### Abstract
> We introduce the notion of non-uniformly sound certificates: succinct single-message (unidirectional) argument systems that satisfy a “best-possible security” against non-uniform polynomial-time attackers. In particular, no polynomial-time attacker with s bits of non-uniform advice can find significantly more than s accepting proofs for false statements. Our first result is a construction of non-uniformly sound certificates for all \(\mathbf{NP }\) in the random oracle model, where the attacker’s advice can depend arbitrarily on the random oracle.
> 
> We next show that the existence of non-uniformly sound certificates for \(\mathbf{P }\) (and collision resistant hash functions) yields a public-coin constant-round fully concurrent zero-knowledge argument for \(\mathbf{NP } \).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_4](https://doi.org/10.1007/978-3-030-26954-8_4)
## On Round Optimal Statistical Zero Knowledge Arguments.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#on-round-optimal-statistical-zero-knowledge-arguments)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#on-round-optimal-statistical-zero-knowledge-arguments)
### Authors
* Nir Bitansky, Tel Aviv University, Tel Aviv-Yafo, Israel
* Omer Paneth, MIT and Northeastern University, Cambridge, USA
### Abstract
> We construct the first three message statistical zero knowledge arguments for all of NP, matching the known lower bound. We do so based on keyless multi-collision resistant hash functions and the Learning with Errors assumption—the same assumptions used to obtain round optimal computational zero knowledge.
> 
> The main component in our construction is a statistically witness indistinguishable argument of knowledge based on a new notion of statistically hiding commitments with subset opening.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_5](https://doi.org/10.1007/978-3-030-26954-8_5)
## It Wasn't Me! - Repudiability and Claimability of Ring Signatures.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#it-wasnt-me-repudiability-and-claimability-of-ring-signatures)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#it-wasnt-me-repudiability-and-claimability-of-ring-signatures)
### Authors
* Sunoo Park, MIT and Harvard, Cambridge, USA
* Adam Sealfon, MIT, Cambridge, USA
### Abstract
> Ring signatures, introduced by [RST01], are a variant of digital signatures which certify that one among a particular set of parties has endorsed a message while hiding which party in the set was the signer. Ring signatures are designed to allow anyone to attach anyone else’s name to a signature, as long as the signer’s own name is also attached. But what guarantee do ring signatures provide if a purported signatory wishes to denounce a signed message—or alternatively, if a signatory wishes to later come forward and claim ownership of a signature? Prior security definitions for ring signatures do not give a conclusive answer to this question: under most existing definitions, the guarantees could go either way. That is, it is consistent with some standard definitions that a non-signer might be able to repudiate a signature that he did not produce, or that this might be impossible. Similarly, a signer might be able to later convincingly claim that a signature he produced is indeed his own, or not. Any of these guarantees might be desirable. For instance, a whistleblower might have reason to want to later claim an anonymously released signature, or a person falsely implicated in a crime associated with a ring signature might wish to denounce the signature that is framing them and damaging their reputation. In other circumstances, it might be desirable that even under duress, a member of a ring cannot produce proof that he did or did not sign a particular signature. In any case, a guarantee one way or the other seems highly desirable.
> 
> In this work, we formalize definitions and give constructions of the new notions of repudiable, unrepudiable, claimable, and unclaimable ring signatures. Our repudiable construction is based on VRFs, which are implied by several number-theoretic assumptions (including strong RSA or bilinear maps); our claimable construction is a black-box transformation from any standard ring signature scheme to a claimable one; and our unclaimable construction is derived from the lattice-based ring signatures of [BK10], which rely on hardness of SIS. Our repudiable construction also provides a new construction of standard ring signatures.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_6](https://doi.org/10.1007/978-3-030-26954-8_6)
## Two-Party ECDSA from Hash Proof Systems and Efficient Instantiations.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#two-party-ecdsa-from-hash-proof-systems-and-efficient-instantiations)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#two-party-ecdsa-from-hash-proof-systems-and-efficient-instantiations)
### Authors
* Guilhem Castagnos, Université de Bordeaux, Inria, CNRS, IMB UMR 5251, F-33405, Talence, France
* Dario Catalano, Università di Catania, Catania, Italy
* Federico Savasta, Università di Catania, Catania, Italy
* Fabien Laguillaumie, Univ Lyon, EnsL, UCBL, CNRS, Inria, LIP, F-69342, Lyon Cedex 07, France
* Ida Tucker, Univ Lyon, EnsL, UCBL, CNRS, Inria, LIP, F-69342, Lyon Cedex 07, France
* Federico Savasta, Scuola Superiore di Catania, Catania, Italy
### Abstract
> ECDSA is a widely adopted digital signature standard. Unfortunately, efficient distributed variants of this primitive are notoriously hard to achieve and known solutions often require expensive zero knowledge proofs to deal with malicious adversaries. For the two party case, Lindell [Lin17] recently managed to get an efficient solution which, to achieve simulation-based security, relies on an interactive, non standard, assumption on Paillier’s cryptosystem. In this paper we generalize Lindell’s solution using hash proof systems. The main advantage of our generic method is that it results in a simulation-based security proof without resorting to non-standard interactive assumptions.
> 
> Moving to concrete constructions, we show how to instantiate our framework using class groups of imaginary quadratic fields. Our implementations show that the practical impact of dropping such interactive assumptions is minimal. Indeed, while for 128-bit security our scheme is marginally slower than Lindell’s, for 256-bit security it turns out to be better both in key generation and signing time. Moreover, in terms of communication cost, our implementation significantly reduces both the number of rounds and the transmitted bits without exception.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_7](https://doi.org/10.1007/978-3-030-26954-8_7)
## Asymmetric Message Franking: Content Moderation for Metadata-Private End-to-End Encryption.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#asymmetric-message-franking-content-moderation-for-metadata-private-end-to-end-encryption)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#asymmetric-message-franking-content-moderation-for-metadata-private-end-to-end-encryption)
### Authors
* Nirvan Tyagi, Cornell Tech, New York City, USA
* Paul Grubbs, Cornell Tech, New York City, USA
* Julia Len, Cornell Tech, New York City, USA
* Ian Miers, Cornell Tech, New York City, USA
* Thomas Ristenpart, Cornell Tech, New York City, USA
* Ian Miers, University of Maryland, College Park, USA
### Abstract
> Content moderation is crucial for stopping abusive and harassing messages in online platforms. Existing moderation mechanisms, such as message franking, require platform providers to be able to associate user identifiers to encrypted messages. These mechanisms fail in metadata-private messaging systems, such as Signal, where users can hide their identities from platform providers. The key technical challenge preventing moderation is achieving cryptographic accountability while preserving deniability.
> 
> In this work, we resolve this tension with a new cryptographic primitive: asymmetric message franking (AMF) schemes. We define strong security notions for AMF schemes, including the first formal treatment of deniability in moderation settings. We then construct, analyze, and implement an AMF scheme that is fast enough to use for content moderation of metadata-private messaging.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_8](https://doi.org/10.1007/978-3-030-26954-8_8)
## Statistical Zeroizing Attack: Cryptanalysis of Candidates of BP Obfuscation over GGH15 Multilinear Map.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#statistical-zeroizing-attack-cryptanalysis-of-candidates-of-bp-obfuscation-over-ggh15-multilinear-map)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#statistical-zeroizing-attack-cryptanalysis-of-candidates-of-bp-obfuscation-over-ggh15-multilinear-map)
### Authors
* Jung Hee Cheon, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Wonhee Cho, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Minki Hhan, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Jiseung Kim, Department of Mathematical Sciences, SNU, Seoul, Republic of Korea
* Jung Hee Cheon, Research Institute of Mathematics (RIM), SNU, Seoul, Republic of Korea
* Jung Hee Cheon, Cryptolab, Seoul, Republic of Korea
* Changmin Lee, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, INRIA, UCBL), Lyon, France
### Abstract
> We present a new cryptanalytic algorithm on obfuscations based on GGH15 multilinear map. Our algorithm, statistical zeroizing attack, directly distinguishes two distributions from obfuscation while it follows the zeroizing attack paradigm, that is, it uses evaluations of zeros of obfuscated programs.
> 
> Our attack breaks the recent indistinguishability obfuscation candidate suggested by Chen et al. (CRYPTO’18) for the optimal parameter settings. More precisely, we show that there are two functionally equivalent branching programs whose CVW obfuscations can be efficiently distinguished by computing the sample variance of evaluations.
> 
> This statistical attack gives a new perspective on the security of the indistinguishability obfuscations: we should consider the shape of the distributions of evaluation of obfuscation to ensure security.
> 
> In other words, while most of the previous (weak) security proofs have been studied with respect to algebraic attack model or ideal model, our attack shows that this algebraic security is not enough to achieve indistinguishability obfuscation. In particular, we show that the obfuscation scheme suggested by Bartusek et al. (TCC’18) does not achieve the desired security in a certain parameter regime, in which their algebraic security proof still holds.
> 
> The correctness of statistical zeroizing attacks holds under a mild assumption on the preimage sampling algorithm with a lattice trapdoor. We experimentally verify this assumption for implemented obfuscation by Halevi et al. (ACM CCS’17).

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_9](https://doi.org/10.1007/978-3-030-26954-8_9)
## Indistinguishability Obfuscation Without Multilinear Maps: New Paradigms via Low Degree Weak Pseudorandomness and Security Amplification.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#indistinguishability-obfuscation-without-multilinear-maps-new-paradigms-via-low-degree-weak-pseudorandomness-and-security-amplification)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#indistinguishability-obfuscation-without-multilinear-maps-new-paradigms-via-low-degree-weak-pseudorandomness-and-security-amplification)
### Authors
* Prabhanjan Ananth, MIT, Cambridge, USA
* Aayush Jain, UCLA, Los Angeles, USA
* Amit Sahai, UCLA, Los Angeles, USA
* Huijia Lin, University of Washington, Seattle, USA
* Christian Matt, Concordium, Zurich, Switzerland
### Abstract
> The existence of secure indistinguishability obfuscators (\(i\mathcal {O}\)) has far-reaching implications, significantly expanding the scope of problems amenable to cryptographic study. All known approaches to constructing \(i\mathcal {O}\) rely on d-linear maps. While secure bilinear maps are well established in cryptographic literature, the security of candidates for \(d>2\) is poorly understood.
> 
> We propose a new approach to constructing \(i\mathcal {O}\) for general circuits. Unlike all previously known realizations of \(i\mathcal {O}\), we avoid the use of d-linear maps of degree \(d \ge 3\).
> 
> At the heart of our approach is the assumption that a new weak pseudorandom object exists. We consider two related variants of these objects, which we call perturbation resilient generator (\(\varDelta \)RG) and pseudo flawed-smudging generator (\(\mathrm {PFG}\)), respectively. At a high level, both objects are polynomially expanding functions whose outputs partially hide (or smudge) small noise vectors when added to them. We further require that they are computable by a family of degree-3 polynomials over \(\mathbb {Z}\). We show how they can be used to construct functional encryption schemes with weak security guarantees. Finally, we use novel amplification techniques to obtain full security.
> 
> As a result, we obtain \(i\mathcal {O}\) for general circuits assuming:
> 
> Subexponentially secure LWE
> 
> Bilinear Maps
> 
> \(\mathrm {poly}(\lambda )\)-secure 3-block-local PRGs
> 
> \(\varDelta \)RGs or \(\mathrm {PFG}\)s

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_10](https://doi.org/10.1007/978-3-030-26954-8_10)
## Watermarking PRFs from Lattices: Stronger Security via Extractable PRFs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#watermarking-prfs-from-lattices-stronger-security-via-extractable-prfs)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#watermarking-prfs-from-lattices-stronger-security-via-extractable-prfs)
### Authors
* Sam Kim, Stanford University, Stanford, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### Abstract
> A software watermarking scheme enables one to embed a “mark” (i.e., a message) within a program while preserving the program’s functionality. Moreover, there is an extraction algorithm that recovers an embedded message from a program. The main security goal is that it should be difficult to remove the watermark without destroying the functionality of the program. Existing constructions of watermarking focus on watermarking cryptographic functions like pseudorandom functions (PRFs); even in this setting, realizing watermarking from standard assumptions remains difficult. The first lattice-based construction of secret-key watermarking due to Kim and Wu (CRYPTO 2017) only ensures mark-unremovability against an adversary who does not have access to the mark-extraction oracle. The construction of Quach et al. (TCC 2018) achieves the stronger notion of mark-unremovability even if the adversary can make extraction queries, but has the drawback that the watermarking authority (who holds the watermarking secret key) can break pseudorandomness of all PRF keys in the family (including unmarked keys).
> 
> In this work, we construct new lattice-based secret-key watermarking schemes for PRFs that both provide unremovability against adversaries that have access to the mark-extraction oracle and offer a strong and meaningful notion of pseudorandomness even against the watermarking authority (i.e., the outputs of unmarked keys are pseudorandom almost everywhere). Moreover, security of several of our schemes can be based on the hardness of computing nearly polynomial approximations to worst-case lattice problems. This is a qualitatively weaker assumption than that needed for existing lattice-based constructions of watermarking (that support message-embedding), all of which require quasi-polynomial approximation factors. Our constructions rely on a new cryptographic primitive called an extractable PRF, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_11](https://doi.org/10.1007/978-3-030-26954-8_11)
## Watermarking Public-Key Cryptographic Primitives.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#watermarking-public-key-cryptographic-primitives)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#watermarking-public-key-cryptographic-primitives)
### Authors
* Rishab Goyal, UT Austin, Austin, TX, USA
* Brent Waters, UT Austin, Austin, TX, USA
* Sam Kim, Stanford University, Stanford, CA, USA
* Nathan Manohar, UCLA, Los Angeles, CA, USA
* Brent Waters, NTT Research, East Palo Alto, CA, USA
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### Abstract
> A software watermarking scheme enables users to embed a message or mark within a program while preserving its functionality. Moreover, it is difficult for an adversary to remove a watermark from a marked program without corrupting its behavior. Existing constructions of software watermarking from standard assumptions have focused exclusively on watermarking pseudorandom functions (PRFs).
> 
> In this work, we study watermarking public-key primitives such as the signing key of a digital signature scheme or the decryption key of a public-key (predicate) encryption scheme. While watermarking public-key primitives might intuitively seem more challenging than watermarking PRFs, our constructions only rely on simple assumptions. Our watermarkable signature scheme can be built from the minimal assumption of one-way functions while our watermarkable public-key encryption scheme can be built from most standard algebraic assumptions that imply public-key encryption (e.g., factoring, discrete log, or lattice assumptions). Our schemes also satisfy a number of appealing properties: public marking, public mark-extraction, and collusion resistance. Our schemes are the first to simultaneously achieve all of these properties.
> 
> The key enabler of our new constructions is a relaxed notion of functionality-preserving. While traditionally, we require that a marked program (approximately) preserve the input/output behavior of the original program, in the public-key setting, preserving the “functionality” does not necessarily require preserving the exact input/output behavior. For instance, if we want to mark a signing algorithm, it suffices that the marked algorithm still output valid signatures (even if those signatures might be different from the ones output by the unmarked algorithm). Similarly, if we want to mark a decryption algorithm, it suffices that the marked algorithm correctly decrypt all valid ciphertexts (but may behave differently from the unmarked algorithm on invalid or malformed ciphertexts). Our relaxed notion of functionality-preserving captures the essence of watermarking and still supports the traditional applications, but provides additional flexibility to enable new and simple realizations of this powerful cryptographic notion.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_12](https://doi.org/10.1007/978-3-030-26954-8_12)
## SpOT-Light: Lightweight Private Set Intersection from Sparse OT Extension.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#spot-light-lightweight-private-set-intersection-from-sparse-ot-extension)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#spot-light-lightweight-private-set-intersection-from-sparse-ot-extension)
### Authors
* Benny Pinkas, Bar-Ilan University, Ramat Gan, Israel
* Avishay Yanai, Bar-Ilan University, Ramat Gan, Israel
* Mike Rosulek, Oregon State University, Corvallis, USA
* Ni Trieu, Oregon State University, Corvallis, USA
### Abstract
> We describe a novel approach for two-party private set intersection (PSI) with semi-honest security. Compared to existing PSI protocols, ours has a more favorable balance between communication and computation. Specifically, our protocol has the lowest monetary cost of any known PSI protocol, when run over the Internet using cloud-based computing services (taking into account current rates for CPU + data). On slow networks (e.g., 10 Mbps) our protocol is actually the fastest.
> 
> Our novel underlying technique is a variant of oblivious transfer (OT) extension that we call sparse OT extension. Conceptually it can be thought of as a communication-efficient multipoint oblivious PRF evaluation. Our sparse OT technique relies heavily on manipulating high-degree polynomials over large finite fields (i.e. elements whose representation requires hundreds of bits). We introduce extensive algorithmic and engineering improvements for interpolation and multi-point evaluation of such polynomials, which we believe will be of independent interest.
> 
> Finally, we present an extensive empirical comparison of state-of-the-art PSI protocols in several application scenarios and along several dimensions of measurement: running time, communication, peak memory consumption, and—arguably the most relevant metric for practice—monetary cost.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_13](https://doi.org/10.1007/978-3-030-26954-8_13)
## Universally Composable Secure Computation with Corrupted Tokens.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#universally-composable-secure-computation-with-corrupted-tokens)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#universally-composable-secure-computation-with-corrupted-tokens)
### Authors
* Nishanth Chandran, Microsoft Research India, Bengaluru, India
* Wutichai Chongchitmate, Department of Mathematics and Computer Science, Faculty of Science, Chulalongkorn University, Bangkok, Thailand
* Rafail Ostrovsky, Department of Computer Science and Department of Mathematics, University of California, Los Angeles, CA, USA
* Ivan Visconti, DIEM, University of Salerno, Fisciano, Italy
### Abstract
> We introduce the corrupted token model. This model generalizes the tamper-proof token model proposed by Katz (EUROCRYPT ’07) relaxing the trust assumption on the honest behavior of tokens. Our model is motivated by the real-world practice of outsourcing hardware production to possibly corrupted manufacturers. We capture the malicious behavior of token manufacturers by allowing the adversary to corrupt the tokens of honest players at the time of their creation.
> 
> We show that under minimal complexity assumptions, i.e., the existence of one-way functions, it is possible to UC-securely realize (a variant of) the tamper-proof token functionality of Katz in the corrupted token model with n stateless tokens assuming that the adversary corrupts at most \(n-1\) of them (for any \(n>0\)). We apply this result to existing multi-party protocols in Katz’s model to achieve UC-secure MPC in the corrupted token model assuming only the existence of one-way functions. Finally, we show how to obtain the above results using tokens of small size that take only short inputs. The technique in this result can also be used to improve the assumption of UC-secure hardware obfuscation recently proposed by Nayak et al. (NDSS ’17). While their construction requires the existence of collision-resistant hash functions, we can obtain the same result from only one-way functions. Moreover using our main result we can improve the trust assumption on the tokens as well.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_14](https://doi.org/10.1007/978-3-030-26954-8_14)
## Reusable Non-Interactive Secure Computation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#reusable-non-interactive-secure-computation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#reusable-non-interactive-secure-computation)
### Authors
* Melissa Chase, Microsoft Research, Redmond, USA
* Yevgeniy Dodis, New York University, New York, USA
* Yuval Ishai, Technion, Haifa, Israel
* Daniel Kraschewski, TNG Technology Consulting GmbH, Unterföhring, Germany
* Tianren Liu, MIT, Cambridge, USA
* Vinod Vaikuntanathan, MIT, Cambridge, USA
* Rafail Ostrovsky, UCLA, Los Angeles, USA
### Abstract
> We consider the problem of Non-Interactive Two-Party Secure Computation (NISC), where Rachel wishes to publish an encryption of her input x, in such a way that any other party, who holds an input y, can send her a single message which conveys to her the value f(x, y), and nothing more. We demand security against malicious parties. While such protocols are easy to construct using garbled circuits and general non-interactive zero-knowledge proofs, this approach inherently makes a non-black-box use of the underlying cryptographic primitives and is infeasible in practice.
> 
> Ishai et al. (Eurocrypt 2011) showed how to construct NISC protocols that only use parallel calls to an ideal oblivious transfer (OT) oracle, and additionally make only a black-box use of any pseudorandom generator. Combined with the efficient 2-message OT protocol of Peikert et al. (Crypto 2008), this leads to a practical approach to NISC that has been implemented in subsequent works. However, a major limitation of all known OT-based NISC protocols is that they are subject to selective failure attacks that allows a malicious sender to entirely compromise the security of the protocol when the receiver’s first message is reused.
> 
> Motivated by the failure of the OT-based approach, we consider the problem of basing reusable NISC on parallel invocations of a standard arithmetic generalization of OT known as oblivious linear-function evaluation (OLE). We obtain the following results:
> 
> We construct an information-theoretically secure reusable NISC protocol for arithmetic branching programs and general zero-knowledge functionalities in the OLE-hybrid model. Our zero-knowledge protocol only makes an absolute constant number of OLE calls per gate in an arithmetic circuit whose satisfiability is being proved. We also get reusable NISC in the OLE-hybrid model for general Boolean circuits using any one-way function.
> 
> We complement this by a negative result, showing that reusable NISC is impossible to achieve in the OT-hybrid model. This provides a formal justification for the need to replace OT by OLE.
> 
> We build a universally composable 2-message reusable OLE protocol in the CRS model that can be based on the security of Paillier encryption and requires only a constant number of modular exponentiations. This provides the first arithmetic analogue of the 2-message OT protocols of Peikert et al. (Crypto 2008).
> 
> By combining our NISC protocol in the OLE-hybrid model and the 2-message OLE protocol, we get protocols with new attractive asymptotic and concrete efficiency features. In particular, we get the first (designated-verifier) NIZK protocols for NP where following a statement-independent preprocessing, both proving and verifying are entirely “non-cryptographic” and involve only a constant computational overhead. Furthermore, we get the first statistical designated-verifier NIZK argument for NP under an assumption related to factoring.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_15](https://doi.org/10.1007/978-3-030-26954-8_15)
## Efficient Pseudorandom Correlation Generators: Silent OT Extension and More.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#efficient-pseudorandom-correlation-generators-silent-ot-extension-and-more)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#efficient-pseudorandom-correlation-generators-silent-ot-extension-and-more)
### Authors
* Elette Boyle, IDC Herzliya, Herzliya, Israel
* Geoffroy Couteau, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Lisa Kohl, Karlsruhe Institute of Technology, Karlsruhe, Germany
* Niv Gilboa, Ben-Gurion University of the Negev, Beersheba, Israel
* Yuval Ishai, Technion, Haifa, Israel
* Peter Scholl, Aarhus University, Aarhus, Denmark
### Abstract
> Secure multiparty computation (MPC) often relies on correlated randomness for better efficiency and simplicity. This is particularly useful for MPC with no honest majority, where input-independent correlated randomness enables a lightweight “non-cryptographic” online phase once the inputs are known. However, since the amount of randomness typically scales with the circuit size of the function being computed, securely generating correlated randomness forms an efficiency bottleneck, involving a large amount of communication and storage.
> 
> A natural tool for addressing the above limitations is a pseudorandom correlation generator (PCG). A PCG allows two or more parties to securely generate long sources of useful correlated randomness via a local expansion of correlated short seeds and no interaction. PCGs enable MPC with silent preprocessing, where a small amount of interaction used for securely sampling the seeds is followed by silent local generation of correlated pseudorandomness.
> 
> A concretely efficient PCG for Vector-OLE correlations was recently obtained by Boyle et al. (CCS 2018) based on variants of the learning parity with noise (LPN) assumption over large fields. In this work, we initiate a systematic study of PCGs and present concretely efficient constructions for several types of useful MPC correlations. We obtain the following main contributions:
> 
> PCG foundations. We give a general security definition for PCGs. Our definition suffices for any MPC protocol satisfying a stronger security requirement that is met by existing protocols. We prove that a stronger security requirement is indeed necessary, and justify our PCG definition by ruling out a stronger and more natural definition.
> 
> Silent OT extension. We present the first concretely efficient PCG for oblivious transfer correlations. Its security is based on a variant of the binary LPN assumption and any correlation-robust hash function. We expect it to provide a faster alternative to the IKNP OT extension protocol (Crypto 2003) when communication is the bottleneck. We present several applications, including protocols for non-interactive zero-knowledge with bounded-reusable preprocessing from binary LPN, and concretely efficient related-key oblivious pseudorandom functions.
> 
> PCGs for simple 2-party correlations. We obtain PCGs for several other types of useful 2-party correlations, including (authenticated) one-time truth-tables and Beaver triples. While the latter PCGs are slower than our PCG for OT, they are still practically feasible. These PCGs are based on a host of assumptions and techniques, including specialized homomorphic secret sharing schemes and pseudorandom generators tailored to their structure.
> 
> Multiparty correlations. We obtain PCGs for multiparty correlations that can be used to make the (input-dependent) online communication of MPC protocols scale linearly with the number of parties, instead of quadratically.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_16](https://doi.org/10.1007/978-3-030-26954-8_16)
## Adaptively Secure and Succinct Functional Encryption: Improving Security and Efficiency, Simultaneously.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#adaptively-secure-and-succinct-functional-encryption-improving-security-and-efficiency-simultaneously)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#adaptively-secure-and-succinct-functional-encryption-improving-security-and-efficiency-simultaneously)
### Authors
* Fuyuki Kitagawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
* Keisuke Tanaka, Tokyo Institute of Technology, Tokyo, Japan
### Abstract
> Functional encryption (FE) is advanced encryption that enables us to issue functional decryption keys where functions are hardwired. When we decrypt a ciphertext of a message m by a functional decryption key where a function f is hardwired, we can obtain f(m) and nothing else. We say FE is selectively or adaptively secure when target messages are chosen at the beginning or after function queries are sent, respectively. In the weakly-selective setting, function queries are also chosen at the beginning. We say FE is single-key/collusion-resistant when it is secure against adversaries that are given only-one/polynomially-many functional decryption keys, respectively. We say FE is sublinearly-succinct/succinct when the running time of an encryption algorithm is sublinear/poly-logarithmic in the function description size, respectively.
> 
> In this study, we propose a generic transformation from weakly-selectively secure, single-key, and sublinearly-succinct (we call “building block”) PKFE for circuits into adaptively secure, collusion-resistant, and succinct (we call “fully-equipped”) one for circuits. Our transformation relies on neither concrete assumptions such as learning with errors nor indistinguishability obfuscation (IO). This is the first generic construction of fully-equipped PKFE that does not rely on IO.
> 
> As side-benefits of our results, we obtain the following primitives from the building block PKFE for circuits: (1) laconic oblivious transfer (2) succinct garbling scheme for Turing machines (3) selectively secure, collusion-resistant, and succinct PKFE for Turing machines (4) low-overhead adaptively secure traitor tracing (5) key-dependent message secure and leakage-resilient public-key encryption. We also obtain a generic transformation from simulation-based adaptively secure garbling schemes that satisfy a natural decomposability property into adaptively indistinguishable garbling schemes whose online complexity does not depend on the output length.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_17](https://doi.org/10.1007/978-3-030-26954-8_17)
## Non-interactive Non-malleability from Quantum Supremacy.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#non-interactive-non-malleability-from-quantum-supremacy)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#non-interactive-non-malleability-from-quantum-supremacy)
### Authors
* Yael Tauman Kalai, Microsoft Research and MIT, Cambridge, USA
* Dakshita Khurana, Microsoft Research, Cambridge, USA
* Dakshita Khurana, UIUC, Urbana-Champaign, USA
### Abstract
> We construct non-interactive non-malleable commitments without setup in the plain model, under well-studied assumptions.
> 
> First, we construct non-interactive non-malleable commitments w.r.t. commitment for \(\epsilon \log \log n\) tags for a small constant \(\epsilon > 0\), under the following assumptions:
> 
> 1. Sub-exponential hardness of factoring or discrete log.
> 
> 2. Quantum sub-exponential hardness of learning with errors (LWE).
> 
> Second, as our key technical contribution, we introduce a new tag amplification technique. We show how to convert any non-interactive non-malleable commitment w.r.t. commitment for \(\epsilon \log \log n\) tags (for any constant \(\epsilon >0\)) into a non-interactive non-malleable commitment w.r.t. replacement for \(2^n\) tags. This part only assumes the existence of sub-exponentially secure non-interactive witness indistinguishable (NIWI) proofs, which can be based on sub-exponential security of the decisional linear assumption.
> 
> Interestingly, for the tag amplification technique, we crucially rely on the leakage lemma due to Gentry and Wichs (STOC 2011). For the construction of non-malleable commitments for \(\epsilon \log \log n\) tags, we rely on quantum supremacy. This use of quantum supremacy in classical cryptography is novel, and we believe it will have future applications. We provide one such application to two-message witness indistinguishable (WI) arguments from (quantum) polynomial hardness assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_18](https://doi.org/10.1007/978-3-030-26954-8_18)
## Cryptographic Sensing.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#cryptographic-sensing)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#cryptographic-sensing)
### Authors
* Yuval Ishai, Technion, Haifa, Israel
* Eyal Kushilevitz, Technion, Haifa, Israel
* Rafail Ostrovsky, University of California, Los Angeles, USA
* Amit Sahai, University of California, Los Angeles, USA
### Abstract
> Is it possible to measure a physical object in a way that makes the measurement signals unintelligible to an external observer? Alternatively, can one learn a natural concept by using a contrived training set that makes the labeled examples useless without the line of thought that has led to their choice? We initiate a study of “cryptographic sensing” problems of this type, presenting definitions, positive and negative results, and directions for further research.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_19](https://doi.org/10.1007/978-3-030-26954-8_19)
## Public-Key Cryptography in the Fine-Grained Setting.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#public-key-cryptography-in-the-fine-grained-setting)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#public-key-cryptography-in-the-fine-grained-setting)
### Authors
* Rio LaVigne, MIT CSAIL and EECS, Cambridge, USA
* Andrea Lincoln, MIT CSAIL and EECS, Cambridge, USA
* Virginia Vassilevska Williams, MIT CSAIL and EECS, Cambridge, USA
### Abstract
> Cryptography is largely based on unproven assumptions, which, while believable, might fail. Notably if \(P = NP\), or if we live in Pessiland, then all current cryptographic assumptions will be broken. A compelling question is if any interesting cryptography might exist in Pessiland.
> 
> A natural approach to tackle this question is to base cryptography on an assumption from fine-grained complexity. Ball, Rosen, Sabin, and Vasudevan [BRSV’17] attempted this, starting from popular hardness assumptions, such as the Orthogonal Vectors (OV) Conjecture. They obtained problems that are hard on average, assuming that OV and other problems are hard in the worst case. They obtained proofs of work, and hoped to use their average-case hard problems to build a fine-grained one-way function. Unfortunately, they proved that constructing one using their approach would violate a popular hardness hypothesis. This motivates the search for other fine-grained average-case hard problems.
> 
> The main goal of this paper is to identify sufficient properties for a fine-grained average-case assumption that imply cryptographic primitives such as fine-grained public key cryptography (PKC). Our main contribution is a novel construction of a cryptographic key exchange, together with the definition of a small number of relatively weak structural properties, such that if a computational problem satisfies them, our key exchange has provable fine-grained security guarantees, based on the hardness of this problem. We then show that a natural and plausible average-case assumption for the key problem Zero-k-Clique from fine-grained complexity satisfies our properties. We also develop fine-grained one-way functions and hardcore bits even under these weaker assumptions.
> 
> Where previous works had to assume random oracles or the existence of strong one-way functions to get a key-exchange computable in O(n) time secure against \(O(n^2)\) adversaries (see [Merkle’78] and [BGI’08]), our assumptions seem much weaker. Our key exchange has a similar gap between the computation of the honest party and the adversary as prior work, while being non-interactive, implying fine-grained PKC.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_20](https://doi.org/10.1007/978-3-030-26954-8_20)
## Exploring Constructions of Compact NIZKs from Various Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#exploring-constructions-of-compact-nizks-from-various-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#exploring-constructions-of-compact-nizks-from-various-assumptions)
### Authors
* Shuichi Katsumata, AIST, Tokyo, Japan
* Shota Yamada, AIST, Tokyo, Japan
* Shuichi Katsumata, The University of Tokyo, Tokyo, Japan
* Ryo Nishimaki, NTT Secure Platform Laboratories, Tokyo, Japan
* Takashi Yamakawa, NTT Secure Platform Laboratories, Tokyo, Japan
### Abstract
> A non-interactive zero-knowledge (NIZK) protocol allows a prover to non-interactively convince a verifier of the truth of the statement without leaking any other information. In this study, we explore shorter NIZK proofs for all \(\mathbf{NP }\) languages. Our primary interest is NIZK proofs from falsifiable pairing/pairing-free group-based assumptions. Thus far, NIZKs in the common reference string model (CRS-NIZKs) for \(\mathbf{NP }\) based on falsifiable pairing-based assumptions all require a proof size at least as large as \(O(|C| \kappa )\), where C is a circuit computing the \(\mathbf{NP }\) relation and \(\kappa \) is the security parameter. This holds true even for the weaker designated-verifier NIZKs (DV-NIZKs). Notably, constructing a (CRS, DV)-NIZK with proof size achieving an additive-overhead \(O(|C|) + \mathsf {poly}(\kappa )\), rather than a multiplicative-overhead \(|C| \cdot \mathsf {poly}(\kappa )\), based on any falsifiable pairing-based assumptions is an open problem.
> 
> In this work, we present various techniques for constructing NIZKs with compact proofs, i.e., proofs smaller than \(O(|C|) + \mathsf {poly}(\kappa )\), and make progress regarding the above situation. Our result is summarized below.
> 
> We construct CRS-NIZK for all \(\mathbf{NP }\) with proof size \(|C| +\mathsf {poly}(\kappa )\) from a (non-static) falsifiable Diffie-Hellman (DH) type assumption over pairing groups. This is the first CRS-NIZK to achieve a compact proof without relying on either lattice-based assumptions or non-falsifiable assumptions. Moreover, a variant of our CRS-NIZK satisfies universal composability (UC) in the erasure-free adaptive setting. Although it is limited to \(\mathbf{NP }\) relations in \(\mathbf{NC }^1\), the proof size is \(|w| \cdot \mathsf {poly}(\kappa )\) where w is the witness, and in particular, it matches the state-of-the-art UC-NIZK proposed by Cohen, shelat, and Wichs (CRYPTO’19) based on lattices.
> 
> We construct (multi-theorem) DV-NIZKs for \(\mathbf{NP }\) with proof size \(|C|+\mathsf {poly}(\kappa )\) from the computational DH assumption over pairing-free groups. This is the first DV-NIZK that achieves a compact proof from a standard DH type assumption. Moreover, if we further assume the \(\mathbf{NP }\) relation to be computable in \(\mathbf{NC }^1\) and assume hardness of a (non-static) falsifiable DH type assumption over pairing-free groups, the proof size can be made as small as \(|w| + \mathsf {poly}(\kappa )\).
> 
> Another related but independent issue is that all (CRS, DV)-NIZKs require the running time of the prover to be at least \(|C|\cdot \mathsf {poly}(\kappa )\). Considering that there exists NIZKs with efficient verifiers whose running time is strictly smaller than |C|, it is an interesting problem whether we can construct prover-efficient NIZKs. To this end, we construct prover-efficient CRS-NIZKs for \(\mathbf{NP }\) with compact proof through a generic construction using laconic functional evaluation schemes (Quach, Wee, and Wichs (FOCS’18)). This is the first NIZK in any model where the running time of the prover is strictly smaller than the time it takes to compute the circuit C computing the \(\mathbf{NP }\) relation.
> 
> Finally, perhaps of an independent interest, we formalize the notion of homomorphic equivocal commitments, which we use as building blocks to obtain the first result, and show how to construct them from pairing-based assumptions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_21](https://doi.org/10.1007/978-3-030-26954-8_21)
## New Constructions of Reusable Designated-Verifier NIZKs.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#new-constructions-of-reusable-designated-verifier-nizks)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#new-constructions-of-reusable-designated-verifier-nizks)
### Authors
* Alex Lombardi, MIT, Cambridge, MA, USA
* Willy Quach, Northeastern University, Boston, MA, USA
* Daniel Wichs, Northeastern University, Boston, MA, USA
* Ron D. Rothblum, Technion, Haifa, Israel
* David J. Wu, University of Virginia, Charlottesville, VA, USA
### Abstract
> Non-interactive zero-knowledge arguments (NIZKs) for \(\mathsf {NP}\) are an important cryptographic primitive, but we currently only have instantiations under a few specific assumptions. Notably, we are missing constructions from the learning with errors (LWE) assumption, the Diffie-Hellman (CDH/DDH) assumption, and the learning parity with noise (LPN) assumption.
> 
> In this paper, we study a relaxation of NIZKs to the designated-verifier setting (DV-NIZK), where a trusted setup generates a common reference string together with a secret key for the verifier. We want reusable schemes, which allow the verifier to reuse the secret key to verify many different proofs, and soundness should hold even if the malicious prover learns whether various proofs are accepted or rejected. Such reusable DV-NIZKs were recently constructed under the CDH assumption, but it was open whether they can also be constructed under LWE or LPN.
> 
> We also consider an extension of reusable DV-NIZKs to the malicious designated-verifier setting (MDV-NIZK). In this setting, the only trusted setup consists of a common random string. However, there is also an additional untrusted setup in which the verifier chooses a public/secret key needed to generate/verify proofs, respectively. We require that zero-knowledge holds even if the public key is chosen maliciously by the verifier. Such reusable MDV-NIZKs were recently constructed under the “one-more CDH” assumption, but constructions under CDH/LWE/LPN remained open.
> 
> In this work, we give new constructions of (reusable) DV-NIZKs and MDV-NIZKs using generic primitives that can be instantiated under CDH, LWE, or LPN.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_22](https://doi.org/10.1007/978-3-030-26954-8_22)
## Scalable Zero Knowledge with No Trusted Setup.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#scalable-zero-knowledge-with-no-trusted-setup)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#scalable-zero-knowledge-with-no-trusted-setup)
### Authors
* Eli Ben-Sasson, Technion, Haifa, Israel
* Yinon Horesh, Technion, Haifa, Israel
* Michael Riabzev, Technion, Haifa, Israel
* Eli Ben-Sasson, StarkWare Industries Ltd., Netanya, Israel
* Michael Riabzev, StarkWare Industries Ltd., Netanya, Israel
* Iddo Bentov, Cornell Tech, New York, NY, USA
### Abstract
> One of the approaches to constructing zero knowledge (ZK) arguments relies on “PCP techniques” that date back to influential works from the early 1990’s [Babai et al., Arora et al. 1991-2]. These techniques require only minimal cryptographic assumptions, namely, the existence of a family of collision-resistant hash functions [Kilian, STOC 1992], and achieve two remarkable properties: (i) all messages generated by the verifier are public random coins, and (ii) total verification time is merely poly-logarithmic in the time needed to naïvely execute the computation being verified [Babai et al., STOC 1991].
> 
> Those early constructions were never realized in code, mostly because proving time was too large. To address this, the model of interactive oracle proofs (IOPs), which generalizes the PCP model, was recently suggested. Proving time for ZK-IOPs was reduced to quasi-linear, even for problems that require nondeterministic exponential time to decide [Ben-Sasson et al., TCC 2016, ICALP 2017].
> 
> Despite these recent advances it was still not clear whether ZK-IOP systems can lead to concretely efficient succinct argument systems. Our main claim is that this is indeed the case. We present a new construction of an IOP of knowledge (which we call a zk-STIK) that improves, asymptotically, on the state of art: for log-space computations of length T it is the first to \(O(T \log T)\) arithmetic prover complexity and \(O(\log T)\) verifier arithmetic complexity. Prior IOPs had additional \(\mathsf{poly} \log T\) factors in both prover and verifier. Additionally, we report a C++ realization of this system (which we call libSTARK). Compared to prevailing ZK realizations, it has the fastest proving and (total) verification time for sufficiently large sequential computations.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_23](https://doi.org/10.1007/978-3-030-26954-8_23)
## Libra: Succinct Zero-Knowledge Proofs with Optimal Prover Computation.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#libra-succinct-zero-knowledge-proofs-with-optimal-prover-computation)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#libra-succinct-zero-knowledge-proofs-with-optimal-prover-computation)
### Authors
* Tiacheng Xie, University of California, Berkeley, USA
* Jiaheng Zhang, University of California, Berkeley, USA
* Yupeng Zhang, University of California, Berkeley, USA
* Dawn Song, University of California, Berkeley, USA
* Yupeng Zhang, Texas A&M University, College Station, USA
* Charalampos Papamanthou, University of Maryland, College Park, USA
### Abstract
> We present Libra, the first zero-knowledge proof system that has both optimal prover time and succinct proof size/verification time. In particular, if C is the size of the circuit being proved (i) the prover time is O(C) irrespective of the circuit type; (ii) the proof size and verification time are both \(O(d\log C)\) for d-depth log-space uniform circuits (such as RAM programs). In addition Libra features an one-time trusted setup that depends only on the size of the input to the circuit and not on the circuit logic. Underlying Libra is a new linear-time algorithm for the prover of the interactive proof protocol by Goldwasser, Kalai and Rothblum (also known as GKR protocol), as well as an efficient approach to turn the GKR protocol to zero-knowledge using small masking polynomials. Not only does Libra have excellent asymptotics, but it is also efficient in practice. For example, our implementation shows that it takes 200 s to generate a proof for constructing a SHA2-based Merkle tree root on 256 leaves, outperforming all existing zero-knowledge proof systems. Proof size and verification time of Libra are also competitive.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_24](https://doi.org/10.1007/978-3-030-26954-8_24)
## Highly Efficient Key Exchange Protocols with Optimal Tightness.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#highly-efficient-key-exchange-protocols-with-optimal-tightness)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#highly-efficient-key-exchange-protocols-with-optimal-tightness)
### Authors
* Katriel Cohn-Gordon, Oxford, UK
* Cas Cremers, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Kristian Gjøsteen, NTNU - Norwegian University of Science and Technology, Trondheim, Norway
* Håkon Jacobsen, McMaster University, Hamilton, Canada
* Tibor Jager, Paderborn University, Paderborn, Germany
### Abstract
> In this paper we give nearly-tight reductions for modern implicitly authenticated Diffie-Hellman protocols in the style of the Signal and Noise protocols, which are extremely simple and efficient. Unlike previous approaches, the combination of nearly-tight proofs and efficient protocols enables the first real-world instantiations for which the parameters can be chosen in a theoretically sound manner.
> 
> Our reductions have only a linear loss in the number of users, implying that our protocols are more efficient than the state of the art when instantiated with theoretically sound parameters. We also prove that our security proofs are optimal: a linear loss in the number of users is unavoidable for our protocols for a large and natural class of reductions.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_25](https://doi.org/10.1007/978-3-030-26954-8_25)
## Strong Asymmetric PAKE Based on Trapdoor CKEM.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#strong-asymmetric-pake-based-on-trapdoor-ckem)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#strong-asymmetric-pake-based-on-trapdoor-ckem)
### Authors
* Tatiana Bradley, University of California, Irvine, USA
* Stanislaw Jarecki, University of California, Irvine, USA
* Jiayu Xu, University of California, Irvine, USA
### Abstract
> Password-Authenticated Key Exchange (PAKE) protocols allow two parties that share a password to establish a shared key in a way that is immune to offline attacks. Asymmetric PAKE (aPAKE) [20] adapts this notion to the common client-server setting, where the server stores a one-way hash of the password instead of the password itself, and server compromise allows the adversary to recover the password only via the (inevitable) offline dictionary attack. Most aPAKE protocols, however, allow an attacker to pre-compute a dictionary of hashed passwords, thus instantly learning the password on server compromise. Recently, Jarecki, Krawczyk, and Xu formalized a Universally Composable strong aPAKE (saPAKE) [23], which requires the password hash to be salted so that the dictionary attack can only start after the server compromise leaks the salt and the salted hash. The UC saPAKE protocol shown in [23], called OPAQUE, uses 3 protocol flows, 3–4 exponentiations per party, and relies on the One-More Diffie-Hellman assumption in ROM.
> 
> We propose an alternative UC saPAKE construction based on a novel use of the encryption+SPHF paradigm for UC PAKE design [19, 26]. Compared to OPAQUE, our protocol uses only 2 flows, has comparable costs, avoids hashing onto a group, and relies on different assumptions, namely Decisional Diffie-Hellman (DDH), Strong Diffie-Hellman (SDH), and an assumption that the Boneh-Boyen function \(f_ s (x)=g^{1/( s +x)}\) [9] is a Salted Tight One-Way Function (STOWF). We formalize a UC model for STOWF and analyze the Boneh-Boyen function as UC STOWF in the generic group model and ROM.
> 
> Our saPAKE protocol employs a new form of Conditional Key Encapsulation Mechanism (CKEM), a generalization of SPHF, which we call an implicit-statement CKEM. This strengthening of SPHF allows for a UC (sa)PAKE design where only the client commits to its password, and only the server performs an SPHF, compared to the standard UC PAKE design paradigm where the encrypt+SPHF subroutine is used symmetrically by both parties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_26](https://doi.org/10.1007/978-3-030-26954-8_26)
## Broadcast and Trace with N^ε Ciphertext Size from Standard Assumptions.
🌍 **[English](../../../docs/en/Crypto/Crypto[2019-3].md#broadcast-and-trace-with-n-ciphertext-size-from-standard-assumptions)** | [简体中文](../../../docs/zh-CN/Crypto/Crypto[2019-3].md#broadcast-and-trace-with-n-ciphertext-size-from-standard-assumptions)
### Authors
* Rishab Goyal, University of Texas at Austin, Austin, USA
* Brent Waters, University of Texas at Austin, Austin, USA
* Willy Quach, Northeastern University, Boston, USA
* Daniel Wichs, Northeastern University, Boston, USA
* Brent Waters, NTT Research, Tokyo, Japan
### Abstract
> We construct a broadcast and trace scheme (also known as trace and revoke or broadcast, trace and revoke) with N users, where the ciphertext size can be made as low as \(O(N^\varepsilon )\), for any arbitrarily small constant \(\varepsilon >0\). This improves on the prior best construction of broadcast and trace under standard assumptions by Boneh and Waters (CCS ‘06), which had ciphertext size \(O(N^{1/2})\). While that construction relied on bilinear maps, ours uses a combination of the learning with errors (LWE) assumption and bilinear maps.
> 
> Recall that, in both broadcast encryption and traitor-tracing schemes, there is a collection of N users, each of which gets a different secret key \({\mathsf {sk}}_i\). In broadcast encryption, it is possible to create ciphertexts targeted to a subset \(S \subseteq [N]\) of the users such that only those users can decrypt it correctly. In a traitor tracing scheme, if a subset of users gets together and creates a decoder box D that is capable of decrypting ciphertexts, then it is possible to trace at least one of the users responsible for creating D. A broadcast and trace scheme intertwines the two properties, in a way that results in more than just their union. In particular, it ensures that if a decoder D is able to decrypt ciphertexts targeted toward a set S of users, then it should be possible to trace one of the users in the set S responsible for creating D, even if other users outside of S also participated. As of recently, we have essentially optimal broadcast encryption (Boneh, Gentry, Waters CRYPTO ’05) under bilinear maps and traitor tracing (Goyal, Koppula, Waters STOC ’18) under LWE, where the ciphertext size is at most poly-logarithmic in N. The main contribution of our paper is to carefully combine LWE and bilinear-map based components, and get them to interact with each other, to achieve broadcast and trace.

### Links
- **URL:** [https://doi.org/10.1007/978-3-030-26954-8_27](https://doi.org/10.1007/978-3-030-26954-8_27)
