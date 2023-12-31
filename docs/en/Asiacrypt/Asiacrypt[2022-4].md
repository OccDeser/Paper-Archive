# Asiacrypt[2022-4]
## Recovering the Tight Security Proof of SPHINCS+.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#recovering-the-tight-security-proof-of-sphincs)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#recovering-the-tight-security-proof-of-sphincs)
### Authors
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Mikhail Kudinov, Eindhoven University of Technology, Eindhoven, The Netherlands
### Abstract
> In 2020, Kudinov, Kiktenko, and Fedorov pointed out a flaw in the tight security proof of the SPHINCS\(^+\) construction. This work gives a new tight security proof for SPHINCS\(^+\). The flaw can be traced back to the security proof for the Winternitz one-time signature scheme (WOTS) used within SPHINCS\(^+\). In this work, we give a stand-alone description of the WOTS variant used in SPHINCS\(^+\) that we call WOTS-TW. We provide a security proof for WOTS-TW and multi-instance WOTS-TW against non-adaptive chosen message attacks where the adversary only learns the public key after it made its signature query. Afterwards, we show that this is sufficient to give a tight security proof for SPHINCS\(^+\). We recover almost the same bound for the security of SPHINCS\(^+\), with only a factor w loss compared to the previously claimed bound, where w is the Winternitz parameter that is commonly set to 16. On a more technical level, we introduce new lower bounds on the quantum query complexity for generic attacks against properties of cryptographic hash functions and analyse the constructions of tweakable hash functions used in SPHINCS\(^+\) with regard to further security properties.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_1](https://doi.org/10.1007/978-3-031-22972-5_1)
## On Rejection Sampling in Lyubashevsky's Signature Scheme.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#on-rejection-sampling-in-lyubashevskys-signature-scheme)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#on-rejection-sampling-in-lyubashevskys-signature-scheme)
### Authors
* Julien Devevey, ENS de Lyon, Lyon, France
* Omar Fawzi, ENS de Lyon, Lyon, France
* Alain Passelègue, ENS de Lyon, Lyon, France
* Damien Stehlé, ENS de Lyon, Lyon, France
* Omar Fawzi, Inria Lyon, Lyon, France
* Alain Passelègue, Inria Lyon, Lyon, France
* Damien Stehlé, Institut Universitaire de France, Paris, France
### Abstract
> Lyubashevsky’s signatures are based on the Fiat-Shamir with aborts paradigm, whose central ingredient is the use of rejection sampling to transform secret-dependent signature samples into samples from (or close to) a secret-independent target distribution. Several choices for the underlying distributions and for the rejection sampling strategy can be considered. In this work, we study Lyubashevsky’s signatures through the lens of rejection sampling, and aim to minimize signature size given signing runtime requirements. Several of our results concern rejection sampling itself and could have other applications.
> 
> We prove lower bounds for compactness of signatures given signing runtime requirements, and for expected runtime of perfect rejection sampling strategies. We also propose a Rényi-divergence-based analysis of Lyubashevsky’s signatures which allows for larger deviations from the target distribution, and show hyperball uniforms to be a good choice of distributions: they asymptotically reach our compactness lower bounds and offer interesting features for practical deployment. Finally, we propose a different rejection sampling strategy which circumvents the expected runtime lower bound and provides a worst-case runtime guarantee.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_2](https://doi.org/10.1007/978-3-031-22972-5_2)
## Hawk: Module LIP Makes Lattice Signatures Fast, Compact and Simple.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#hawk-module-lip-makes-lattice-signatures-fast-compact-and-simple)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#hawk-module-lip-makes-lattice-signatures-fast-compact-and-simple)
### Authors
* Léo Ducas, CWI, Cryptology Group, Amsterdam, The Netherlands
* Eamonn W. Postlethwaite, CWI, Cryptology Group, Amsterdam, The Netherlands
* Ludo N. Pulles, CWI, Cryptology Group, Amsterdam, The Netherlands
* Wessel van Woerden, CWI, Cryptology Group, Amsterdam, The Netherlands
* Léo Ducas, Mathematical Institute, Leiden University, Leiden, The Netherlands
### Abstract
> We propose the signature scheme Hawk, a concrete instantiation of proposals to use the Lattice Isomorphism Problem (LIP) as a foundation for cryptography that focuses on simplicity. This simplicity stems from LIP, which allows the use of lattices such as \(\mathbb Z^n\), leading to signature algorithms with no floats, no rejection sampling, and compact precomputed distributions. Such design features are desirable for constrained devices, and when computing signatures inside FHE or MPC. The most significant change from recent LIP proposals is the use of module lattices, reusing algorithms and ideas from NTRUSign and Falcon. Its simplicity makes Hawk competitive. We provide cryptanalysis with experimental evidence for the design of Hawk and implement two parameter sets, Hawk-512 and Hawk-1024. Signing using Hawk-512 and Hawk-1024 is four times faster than Falcon on x86 architectures, produces signatures that are about 15% more compact, and is slightly more secure against forgeries by lattice reduction attacks. When floating-points are unavailable, Hawk signs 15 times faster than Falcon.
> 
> We provide a worst case to average case reduction for module LIP. For certain parametrisations of Hawk this applies to secret key recovery and we reduce signature forgery in the random oracle model to a new problem called the one more short vector problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_3](https://doi.org/10.1007/978-3-031-22972-5_3)
## BLOOM: Bimodal Lattice One-out-of-Many Proofs and Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#bloom-bimodal-lattice-one-out-of-many-proofs-and-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#bloom-bimodal-lattice-one-out-of-many-proofs-and-applications)
### Authors
* Vadim Lyubashevsky, IBM Research Europe, Ruschlikon, Switzerland
* Ngoc Khanh Nguyen, EPFL, Lausanne, Switzerland
### Abstract
> We give a construction of an efficient one-out-of-many proof system, in which a prover shows that he knows the pre-image for one element in a set, based on the hardness of lattice problems. The construction employs the recent zero-knowledge framework of Lyubashevsky et al. (Crypto 2022) together with an improved, over prior lattice-based one-out-of-many proofs, recursive procedure, and a novel rejection sampling proof that allows to use the efficient bimodal rejection sampling throughout the protocol.
> 
> Using these new primitives and techniques, we give instantiations of the most compact lattice-based ring and group signatures schemes. The improvement in signature sizes over prior works ranges between \(25\%\) and 2X. Perhaps of even more significance, the size of the user public keys, which need to be stored somewhere publicly accessible in order for ring signatures to be meaningful, is reduced by factors ranging from 7X to 15X. In what could be of independent interest, we also provide noticeably improved proofs for integer relations which, together with one-out-of-many proofs are key components of confidential payment systems.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_4](https://doi.org/10.1007/978-3-031-22972-5_4)
## GUC-Secure Commitments via Random Oracles: New Impossibility and Feasibility.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#guc-secure-commitments-via-random-oracles-new-impossibility-and-feasibility)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#guc-secure-commitments-via-random-oracles-new-impossibility-and-feasibility)
### Authors
* Zhelei Zhou, Zhejiang University, Hangzhou, China
* Bingsheng Zhang, Zhejiang University, Hangzhou, China
* Kui Ren, Zhejiang University, Hangzhou, China
* Zhelei Zhou, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Bingsheng Zhang, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Kui Ren, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
* Hong-Sheng Zhou, Virginia Commonwealth University, Richmond, USA
### Abstract
> In the UC framework, protocols must be subroutine respecting; therefore, shared trusted setup might cause security issues. To address this drawback, Generalized UC (GUC) framework is introduced by Canetti et al. (TCC 2007). In this work, we investigate the impossibility and feasibility of GUC-secure commitments using global random oracles (GRO) as the trusted setup. In particular, we show that it is impossible to have a 2-round (1-round committing and 1-round opening) GUC-secure commitment in the global observable RO model by Canetti et al. (CCS 2014). We then give a new round-optimal GUC-secure commitment that uses only Minicrypt assumptions (i.e. the existence of one-way functions) in the global observable RO model. Furthermore, we also examine the complete picture on round complexity of the GUC-secure commitments in various global RO models.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_5](https://doi.org/10.1007/978-3-031-22972-5_5)
## Additive-Homomorphic Functional Commitments and Applications to Homomorphic Signatures.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#additive-homomorphic-functional-commitments-and-applications-to-homomorphic-signatures)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#additive-homomorphic-functional-commitments-and-applications-to-homomorphic-signatures)
### Authors
* Dario Catalano, University of Catania, Catania, Italy
* Dario Fiore, IMDEA Software Institute, Madrid, Spain
* Ida Tucker, IMDEA Software Institute, Madrid, Spain
### Abstract
> Functional Commitments (FC) allow one to reveal functions of committed data in a succinct and verifiable way. In this paper we put forward the notion of additive-homomorphic FC and show two efficient, pairing-based, realizations of this primitive supporting multivariate polynomials of constant degree and monotone span programs, respectively. We also show applications of the new primitive in the contexts of homomorphic signatures: we show that additive-homomorphic FCs can be used to realize homomorphic signatures (supporting the same class of functionalities as the underlying FC) in a simple and elegant way. Using our new FCs as underlying building blocks, this leads to the (seemingly) first expressive realizations of multi-input homomorphic signatures not relying on lattices or multilinear maps.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_6](https://doi.org/10.1007/978-3-031-22972-5_6)
## Linear-Map Vector Commitments and Their Practical Applications.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#linear-map-vector-commitments-and-their-practical-applications)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#linear-map-vector-commitments-and-their-practical-applications)
### Authors
* Matteo Campanelli, Protocol Labs, San Francisco, USA
* Anca Nitulescu, Protocol Labs, San Francisco, USA
* Carla Ràfols, Universitat Pompeu Fabra, Barcelona, Spain
* Alexandros Zacharakis, Universitat Pompeu Fabra, Barcelona, Spain
* Arantxa Zapico, Universitat Pompeu Fabra, Barcelona, Spain
### Abstract
> Vector commitments (VC) are a cryptographic primitive that allows one to commit to a vector and then “open” some of its positions efficiently. Vector commitments are increasingly recognized as a central tool to scale highly decentralized networks of large size and whose content is dynamic. In this work, we examine the demands on the properties that a vector commitment should satisfy in the light of the emerging plethora of practical applications and propose new constructions that improve the state-of-the-art in several dimensions and offer new tradeoffs. We also propose a unifying framework that captures several constructions and we show how to generically achieve some properties from more basic ones. On the practical side, we focus on building efficient schemes that do not require a new trusted setup (we can reuse existing ceremonies for other pairing-based schemes, such as “powers of tau” run by real-world systems such as Zcash or Filecoin).

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_7](https://doi.org/10.1007/978-3-031-22972-5_7)
## PointProofs, Revisited.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#pointproofs-revisited)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#pointproofs-revisited)
### Authors
* Benoît Libert, CNRS, Laboratoire LIP, Lyon, France
* Benoît Libert, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Mahshid Riahinia, ENS de Lyon, Laboratoire LIP (U. Lyon, CNRS, ENSL, Inria, UCBL), Lyon, France
* Alain Passelègue, Inria, Lyon, France
### Abstract
> Vector commitments allow a user to commit to a vector of length n using a constant-size commitment while being able to locally open the commitment to individual vector coordinates. Importantly, the size of position-wise openings should be independent of the dimension n. Gorbunov, Reyzin, Wee, and Zhang recently proposed PointProofs (CCS 2020), a vector commitment scheme that supports non-interactive aggregation of proofs across multiple commitments, allowing to drastically reduce the cost of block propagation in blockchain smart contracts. Gorbunov et al. provide a security analysis combining the algebraic group model and the random oracle model, under the weak n-bilinear Diffie-Hellman Exponent assumption (n-wBDHE) assumption. In this work, we propose a novel analysis that does not rely on the algebraic group model. We prove the security in the random oracle model under the n-Diffie-Hellman Exponent (n-DHE) assumption, which is implied by the n-wBDHE assumption considered by Gorbunov et al. We further note that we do not modify their scheme (and thus preserve its efficiency) nor introduce any additional assumption. Instead, we prove the security of the scheme as it is via a strictly improved analysis.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_8](https://doi.org/10.1007/978-3-031-22972-5_8)
## Universal Ring Signatures in the Standard Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#universal-ring-signatures-in-the-standard-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#universal-ring-signatures-in-the-standard-model)
### Authors
* Pedro Branco, Johns Hopkins University, Baltimore, USA
* Nico Döttling, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Stella Wohnig, Helmholtz Center for Information Security (CISPA), Saarbrücken, Germany
* Stella Wohnig, Universität des Saarlandes, Saarbrücken, Germany
### Abstract
> Ring signatures allow a user to sign messages on behalf of an ad hoc set of users - a ring - while hiding her identity. The original motivation for ring signatures was whistleblowing [Rivest et al. ASIACRYPT’01]: a high government employee can anonymously leak sensitive information while certifying that it comes from a reliable source, namely by signing the leak. However, essentially all known ring signature schemes require the members of the ring to publish a structured verification key that is compatible with the scheme. This creates somewhat of a paradox since, if a user does not want to be framed for whistleblowing, they will stay clear of signature schemes that support ring signatures.
> 
> In this work, we formalize the concept of universal ring signatures (URS). A URS enables a user to issue a ring signature with respect to a ring of users, independently of the signature schemes they are using. In particular, none of the verification keys in the ring need to come from the same scheme. Thus, in principle, URS presents an effective solution for whistleblowing.
> 
> The main goal of this work is to study the feasibility of URS, especially in the standard model (i.e. no random oracles or common reference strings). We present several constructions of URS, offering different trade-offs between assumptions required, the level of security achieved, and the size of signatures:
> 
> Our first construction is based on superpolynomial hardness assumptions of standard primitives. It achieves compact signatures. That means the size of a signature depends only logarithmically on the size of the ring and on the number of signature schemes involved.
> 
> We then proceed to study the feasibility of constructing URS from standard polynomially-hard assumptions only. We construct a non-compact URS from witness encryption and additional standard assumptions.
> 
> Finally, we show how to modify the non-compact construction into a compact one by relying on indistinguishability obfuscation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_9](https://doi.org/10.1007/978-3-031-22972-5_9)
## The Abe-Okamoto Partially Blind Signature Scheme Revisited.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#the-abe-okamoto-partially-blind-signature-scheme-revisited)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#the-abe-okamoto-partially-blind-signature-scheme-revisited)
### Authors
* Julia Kastner, Department of Computer Science, ETH Zurich, Zurich, Switzerland
* Julian Loss, CISPA Helmholtz Center for Information Security, Saarbrücken, Germany
* Jiayu Xu, School of Electrical Engineering and Computer Science, Oregon State University, Corvallis, OR, USA
### Abstract
> Partially blind signatures, an extension of ordinary blind signatures, are a primitive with wide applications in e-cash and electronic voting. One of the most efficient schemes to date is the one by Abe and Okamoto (CRYPTO 2000), whose underlying idea—the OR-proof technique—has served as the basis for several works.
> 
> We point out several subtle flaws in the original proof of security, and provide a new detailed and rigorous proof, achieving similar bounds as the original work. We believe our insights on the proof strategy will find useful in the security analyses of other OR-proof-based schemes.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_10](https://doi.org/10.1007/978-3-031-22972-5_10)
## An Analysis of the Algebraic Group Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#an-analysis-of-the-algebraic-group-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#an-analysis-of-the-algebraic-group-model)
### Authors
* Cong Zhang, Zhejiang University, Hangzhou, China
* Hong-Sheng Zhou, Virginia Commonwealth University, Richmond, USA
* Jonathan Katz, University of Maryland, College Park, USA
* Cong Zhang, ZJU-Hangzhou Global Scientific and Technological Innovation Center, Hangzhou, China
### Abstract
> The algebraic group model (AGM), formalized by Fuchsbauer, Kiltz, and Loss, has recently received significant attention. One of the appealing properties of the AGM is that it is viewed as being (strictly) weaker than the generic group model (GGM), in the sense that hardness results for algebraic algorithms imply hardness results for generic algorithms, and generic reductions in the AGM (namely, between the algebraic formulations of two problems) imply generic reductions in the GGM. We highlight that as the GGM and AGM are currently formalized, this is not true: hardness in the AGM may not imply hardness in the GGM, and a generic reduction in the AGM may not imply a similar reduction in the GGM.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_11](https://doi.org/10.1007/978-3-031-22972-5_11)
## Instantiability of Classical Random-Oracle-Model Encryption Transforms.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#instantiability-of-classical-random-oracle-model-encryption-transforms)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#instantiability-of-classical-random-oracle-model-encryption-transforms)
### Authors
* Alice Murphy, Department of Computer Science, University of Waterloo, Waterloo, Canada
* Adam O’Neill, Manning CICS, University of Massachusetts Amherst, Amherst, USA
* Mohammad Zaheri, Snap Inc., Santa Monica, USA
### Abstract
> Extending work leveraging program obfuscation to instantiate random-oracle-based transforms (e.g., Hohenberger et al., EUROCRYPT 2014, Kalai el al., CRYPTO 2017), we show that, using obfuscation and other assumptions, there exist standard-model hash functions that suffice to instantiate the classical RO-model encryption transforms OAEP (Bellare and Rogaway, EUROCRYPT 1994) and Fujisaki-Okamoto (CRYPTO 1999, J. Cryptology 2013) for specific public-key encryption (PKE) schemes to achieve IND-CCA security. Our result for Fujisaki-Okamoto employs a simple modification to the scheme.
> 
> Our instantiations do not require much stronger assumptions on the base schemes compared to their corresponding RO-model proofs. For example, to instantiate low-exponent RSA-OAEP, the assumption we need on RSA is sub-exponential partial one-wayness, matching the assumption (partial one-wayness) on RSA needed by Fujisaki et al. (J. Cryptology 2004) in the RO model up to sub-exponentiality. For the part of Fujisaki-Okamoto that upgrades public-key encryption satisfying indistinguishability against plaintext checking attack to IND-CCA, we again do not require much stronger assumptions up to sub-exponentiality.
> 
> We obtain our hash functions in a unified way, extending a technique of Brzuska and Mittelbach (ASIACRYPT 2014). We incorporate into their technique: (1) extremely lossy functions (ELFs), a notion by Zhandry (CRYPTO 2016), and (2) multi-bit auxiliary-input point function obfuscation (MB-AIPO). While MB-AIPO is impossible in general (Brzuska and Mittelbach, ASIACRYPT 2014), we give plausible constructions for the special cases we need, which may be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_12](https://doi.org/10.1007/978-3-031-22972-5_12)
## Nonmalleable Digital Lockers and Robust Fuzzy Extractors in the Plain Model.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#nonmalleable-digital-lockers-and-robust-fuzzy-extractors-in-the-plain-model)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#nonmalleable-digital-lockers-and-robust-fuzzy-extractors-in-the-plain-model)
### Authors
* Daniel Apon, MITRE, McLean, VA, USA
* Chloe Cachet, University of Connecticut, Mansfield, CT, USA
* Benjamin Fuller, University of Connecticut, Mansfield, CT, USA
* Peter Hall, New York University, New York, USA
* Feng-Hao Liu, Florida Atlantic University, Boca Raton, FL, USA
### Abstract
> We give the first constructions in the plain model of 1) nonmalleable digital lockers (Canetti and Varia, TCC 2009) and 2) robust fuzzy extractors (Boyen et al., Eurocrypt 2005) that secure sources with entropy below 1/2 of their length. Constructions were previously only known for both primitives assuming random oracles or a common reference string (CRS).
> 
> Along the way, we define a new primitive called a nonmalleable point function obfuscation with associated data. The associated data is public but protected from all tampering. We use the same paradigm to then extend this to digital lockers. Our constructions achieve nonmalleability over the output point by placing a CRS into the associated data and using an appropriate non-interactive zero-knowledge proof. Tampering is protected against the input point over low-degree polynomials and over any tampering to the output point and associated data. Our constructions achieve virtual black box security.
> 
> These constructions are then used to create robust fuzzy extractors that can support low-entropy sources in the plain model. By using the geometric structure of a syndrome secure sketch (Dodis et al., SIAM Journal on Computing 2008), the adversary’s tampering function can always be expressed as a low-degree polynomial; thus, the protection provided by the constructed nonmalleable objects suffices.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_13](https://doi.org/10.1007/978-3-031-22972-5_13)
## Continuously Non-malleable Codes Against Bounded-Depth Tampering.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#continuously-non-malleable-codes-against-bounded-depth-tampering)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#continuously-non-malleable-codes-against-bounded-depth-tampering)
### Authors
* Gianluca Brian, Sapienza University of Rome, Rome, Italy
* Daniele Venturi, Sapienza University of Rome, Rome, Italy
* Sebastian Faust, Technische Universität Darmstadt, Darmstadt, Germany
* Elena Micheli, Technische Universität Darmstadt, Darmstadt, Germany
* Daniele Venturi, Technische Universität Darmstadt, Darmstadt, Germany
### Abstract
> Non-malleable codes (Dziembowski, Pietrzak and Wichs, ICS 2010 & JACM 2018) allow protecting arbitrary cryptographic primitives against related-key attacks (RKAs). Even when using codes that are guaranteed to be non-malleable against a single tampering attempt, one obtains RKA security against poly-many tampering attacks at the price of assuming perfect memory erasures. In contrast, continuously non-malleable codes (Faust, Mukherjee, Nielsen and Venturi, TCC 2014) do not suffer from this limitation, as the non-malleability guarantee holds against poly-many tampering attempts. Unfortunately, there are only a handful of constructions of continuously non-malleable codes, while standard non-malleable codes are known for a large variety of tampering families including, e.g., NC0 and decision-tree tampering, AC0, and recently even bounded polynomial-depth tampering. We change this state of affairs by providing the first constructions of continuously non-malleable codes in the following natural settings:
> 
> Against decision-tree tampering, where, in each tampering attempt, every bit of the tampered codeword can be set arbitrarily after adaptively reading up to d locations within the input codeword. Our scheme is in the plain model, can be instantiated assuming the existence of one-way functions, and tolerates tampering by decision trees of depth \(d = O(n^{1/8})\), where n is the length of the codeword. Notably, this class includes NC0.
> 
> Against bounded polynomial-depth tampering, where in each tampering attempt the adversary can select any tampering function that can be computed by a circuit of bounded polynomial depth (and unbounded polynomial size). Our scheme is in the common reference string model, and can be instantiated assuming the existence of time-lock puzzles and simulation-extractable (succinct) non-interactive zero-knowledge proofs.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_14](https://doi.org/10.1007/978-3-031-22972-5_14)
## Failing Gracefully: Decryption Failures and the Fujisaki-Okamoto Transform.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#failing-gracefully-decryption-failures-and-the-fujisaki-okamoto-transform)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#failing-gracefully-decryption-failures-and-the-fujisaki-okamoto-transform)
### Authors
* Kathrin Hövelmanns, Eindhoven University of Technology, Eindhoven, The Netherlands
* Andreas Hülsing, Eindhoven University of Technology, Eindhoven, The Netherlands
* Christian Majenz, Department of Applied Mathematics and Computer Science, Technical University of Denmark, Lyngby, Denmark
### Abstract
> In known security reductions for the Fujisaki-Okamoto transformation, decryption failures are handled via a reduction solving the rather unnatural task of finding failing plaintexts given the private key, resulting in a Grover search bound. Moreover, they require an implicit rejection mechanism for invalid ciphertexts to achieve a reasonable security bound in the QROM. We present a reduction that has neither of these deficiencies: We introduce two security games related to finding decryption failures, one capturing the computationally hard task of using the public key to find a decryption failure, and one capturing the statistically hard task of searching the random oracle for key-independent failures like, e.g., large randomness. As a result, our security bounds in the QROM are tighter than previous ones with respect to the generic random oracle search attacks: The attacker can only partially compute the search predicate, namely for said key-independent failures. In addition, our entire reduction works for the explicit-reject variant of the transformation and improves significantly over all of its known reductions. Besides being the more natural variant of the transformation, security of the explicit reject mechanism is also relevant for side channel attack resilience of the implicit-rejection variant. Along the way, we prove several technical results characterizing preimage extraction and certain search tasks in the QROM that might be of independent interest.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_15](https://doi.org/10.1007/978-3-031-22972-5_15)
## Optimising Linear Key Recovery Attacks with Affine Walsh Transform Pruning.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#optimising-linear-key-recovery-attacks-with-affine-walsh-transform-pruning)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#optimising-linear-key-recovery-attacks-with-affine-walsh-transform-pruning)
### Authors
* Antonio Flórez-Gutiérrez, Inria, Paris, France
### Abstract
> Linear cryptanalysis [25] is one of the main families of key-recovery attacks on block ciphers. Several publications [16, 19] have drawn attention towards the possibility of reducing their time complexity using the fast Walsh transform. These previous contributions ignore the structure of the key recovery rounds, which are treated as arbitrary boolean functions. In this paper, we optimise the time and memory complexities of these algorithms by exploiting zeroes in the Walsh spectra of these functions using a novel affine pruning technique for the Walsh Transform. These new optimisation strategies are then showcased with two application examples: an improved attack on the DES [1] and the first known attack on 29-round PRESENT-128 [9].

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_16](https://doi.org/10.1007/978-3-031-22972-5_16)
## Statistical Decoding 2.0: Reducing Decoding to LPN.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#statistical-decoding-2-0-reducing-decoding-to-lpn)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#statistical-decoding-2-0-reducing-decoding-to-lpn)
### Authors
* Kévin Carrier, ETIS Laboratory, CY Cergy-Paris University, Cergy-Pontoise, France
* Thomas Debris-Alazard, Project GRACE, Inria Saclay-Ile de France, Palaiseau, France
* Charles Meyer-Hilfiger, Project COSMIQ, Inria de Paris, Paris, France
* Jean-Pierre Tillich, Project COSMIQ, Inria de Paris, Paris, France
### Abstract
> The security of code-based cryptography relies primarily on the hardness of generic decoding with linear codes. The best generic decoding algorithms are all improvements of an old algorithm due to Prange: they are known under the name of information set decoders (ISD). A while ago, a generic decoding algorithm which does not belong to this family was proposed: statistical decoding. It is a randomized algorithm that requires the computation of a large set of parity-checks of moderate weight, and uses some kind of majority voting on these equations to recover the error. This algorithm was long forgotten because even the best variants of it performed poorly when compared to the simplest ISD algorithm. We revisit this old algorithm by using parity-check equations in a more general way. Here the parity-checks are used to get LPN samples with a secret which is part of the error and the LPN noise is related to the weight of the parity-checks we produce. The corresponding LPN problem is then solved by standard Fourier techniques. By properly choosing the method of producing these low weight equations and the size of the LPN problem, we are able to outperform in this way significantly information set decoders at code rates smaller than 0.3. It gives for the first time after 60 years, a better decoding algorithm for a significant range which does not belong to the ISD family.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_17](https://doi.org/10.1007/978-3-031-22972-5_17)
## A Third is All You Need: Extended Partial Key Exposure Attack on CRT-RSA with Additive Exponent Blinding.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#a-third-is-all-you-need-extended-partial-key-exposure-attack-on-crt-rsa-with-additive-exponent-blinding)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#a-third-is-all-you-need-extended-partial-key-exposure-attack-on-crt-rsa-with-additive-exponent-blinding)
### Authors
* Yuanyuan Zhou, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* François-Xavier Standaert, Crypto Group, ICTEAM Institute, UCLouvain, Louvain-la-Neuve, Belgium
* Joop van de Pol, Delft, Netherlands
* Yu Yu, Shanghai Jiao Tong University, Shanghai, 200240, China
* Yu Yu, Shanghai Qi Zhi Institute, 701 Yunjin Road, Shanghai, 200232, China
### Abstract
> At Eurocrypt 2022, May et al. proposed a partial key exposure (PKE) attack on CRT-RSA that efficiently factors N knowing only a \(\frac{1}{3}\)-fraction of either most significant bits (MSBs) or least significant bits (LSBs) of private exponents \(d_p\) and \(d_q\) for public exponent \(e \approx N^{\frac{1}{12}}\). In practice, PKE attacks typically rely on the side-channel leakage of these exponents, while a side-channel resistant implementation of CRT-RSA often uses additively blinded exponents \(d^{\prime }_p = d_p + r_p(p-1)\) and \(d^{\prime }_q = d_q + r_q(q-1)\) with unknown random blinding factors \(r_p\) and \(r_q\), which makes PKE attacks more challenging.
> 
> Motivated by the above, we extend the PKE attack of May et al. to CRT-RSA with additive exponent blinding. While admitting \(r_pe\in (0,N^{\frac{1}{4}})\), our extended PKE works ideally when \(r_pe \approx N^{\frac{1}{12}}\), in which case the entire private key can be recovered using only \(\frac{1}{3}\) known MSBs or LSBs of the blinded CRT exponents \(d^{\prime }_p\) and \(d^{\prime }_q\). Our extended PKE follows their novel two-step approach to first compute the key-dependent constant \(k^{\prime }\) (\(ed^{\prime }_p = 1 + k^{\prime }(p-1)\), \(ed^{\prime }_q = 1 + l^{\prime }(q-1)\)), and then to factor N by computing the root of a univariate polynomial modulo \(k^{\prime }p\). We extend their approach as follows. For the MSB case, we propose two options for the first step of the attack, either by obtaining a single estimate \(k^{\prime }l^{\prime }\) and calculating \(k^{\prime }\) via factoring, or by obtaining multiple estimates \(k^{\prime }l^{\prime }_1,\ldots ,k^{\prime }l^{\prime }_z\) and calculating \(k^{\prime }\) probabilistically via GCD.
> 
> For the LSB case, we extend their approach by constructing a different univariate polynomial in the second step of the LSB attack. A formal analysis shows that our LSB attack runs in polynomial time under the standard Coppersmith-type assumption, while our MSB attack either runs in sub-exponential time with a reduced input size (the problem is reduced to factor a number of size \(e^2r_pr_q\approx N^{\frac{1}{6}}\)) or in probabilistic polynomial time under a novel heuristic assumption. Under the settings of the most common key sizes (1024-bit, 2048-bit, and 3072-bit) and blinding factor lengths (32-bit, 64-bit, and 128-bit), our experiments verify the validity of the Coppersmith-type assumption and our own assumption, as well as the feasibility of the factoring step.
> 
> To the best of our knowledge, this is the first PKE on CRT-RSA with experimentally verified effectiveness against 128-bit unknown exponent blinding factors. We also demonstrate an application of the proposed PKE attack using real partial side-channel key leakage targeting a Montgomery Ladder exponentiation CRT implementation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_18](https://doi.org/10.1007/978-3-031-22972-5_18)
## Stretching Cube Attacks: Improved Methods to Recover Massive Superpolies.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#stretching-cube-attacks-improved-methods-to-recover-massive-superpolies)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#stretching-cube-attacks-improved-methods-to-recover-massive-superpolies)
### Authors
* Jiahui He, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Meiqin Wang, School of Cyber Science and Technology, Shandong University, Qingdao, Shandong, China
* Kai Hu, School of Physical and Mathematical Sciences, Nanyang Technological University, Singapore, Singapore
* Bart Preneel, imec-COSIC, KU Leuven, Leuven, Belgium
* Jiahui He, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Key Laboratory of Cryptologic Technology and Information Security, Ministry of Education, Shandong University, Jinan, China
* Meiqin Wang, Quan Cheng Shandong Laboratory, Jinan, China
### Abstract
> Cube attacks exploit the algebraic properties of symmetric ciphers by recovering a special polynomial, the superpoly, and subsequently the secret key. When the algebraic normal forms of the corresponding Boolean functions are not available, the division property based approach allows to recover the exact superpoly in a clever way. However, the computational cost to recover the superpoly becomes prohibitive as the number of rounds of the cipher increases. For example, the nested monomial predictions (NMP) proposed at ASIACRYPT 2021 stuck at round 845 for Trivium. To alleviate the bottleneck of the NMP technique, i.e., the unsolvable model due to the excessive number of monomial trails, we shift our focus to the so-called valuable terms of a specific middle round that contribute to the superpoly. Two new techniques are introduced, namely, Non-zero Bit-based Division Property (NBDP) and Core Monomial Prediction (CMP), both of which result in a simpler MILP model compared to the MILP model of MP. It can be shown that the CMP technique offers a substantial improvement over the monomial prediction technique in terms of computational complexity of recovering valuable terms. Combining the divide-and-conquer strategy with these two new techniques, we catch the valuable terms more effectively and thus avoid wasting computational resources on intermediate terms contributing nothing to the superpoly. As an illustration of the power of our techniques, we apply our framework to Trivium, Grain-128AEAD, Kreyvium and Acorn. As a result, the computational cost of earlier attacks can be significantly reduced and the exact ANFs of the superpolies for 846-, 847- and 848-round Trivium, 192-round Grain-128AEAD, 895-round Kreyvium and 776-round Acorn can be recovered in practical time, even though the superpoly of 848-round Trivium contains over 500 million terms; this corresponds to respectively 3, 1, 1 and 1 rounds more than the previous best results. Moreover, by investigating the internal properties of Möbius transformation, we show how to perform key recovery using superpolies involving full key bits, which leads to the best key recovery attacks on the targeted ciphers.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_19](https://doi.org/10.1007/978-3-031-22972-5_19)
## Functional Encryption with Secure Key Leasing.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#functional-encryption-with-secure-key-leasing)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#functional-encryption-with-secure-key-leasing)
### Authors
* Fuyuki Kitagawa, NTT Social Informatics Laboratories, Tokyo, Japan
* Ryo Nishimaki, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> Secure software leasing is a quantum cryptographic primitive that enables us to lease software to a user by encoding it into a quantum state. Secure software leasing has a mechanism that verifies whether a returned software is valid or not. The security notion guarantees that once a user returns a software in a valid form, the user no longer uses the software.
> 
> In this work, we introduce the notion of secret-key functional encryption (SKFE) with secure key leasing, where a decryption key can be securely leased in the sense of secure software leasing. We also instantiate it with standard cryptographic assumptions. More specifically, our contribution is as follows.
> 
> We define the syntax and security definitions for SKFE with secure key leasing.
> 
> We achieve a transformation from standard SKFE into SKFE with secure key leasing without using additional assumptions. Especially, we obtain bounded collusion-resistant SKFE for \(\textsf{P}/\textsf{poly}\) with secure key leasing based on post-quantum one-way functions since we can instantiate bounded collusion-resistant SKFE for \(\textsf{P}/\textsf{poly}\) with the assumption.
> 
> Some previous secure software leasing schemes capture only pirate software that runs on an honest evaluation algorithm (on a legitimate platform). However, our secure key leasing notion captures arbitrary attack strategies and does not have such a limitation. As an additional contribution, we introduce the notion of single-decryptor FE (SDFE), where each functional decryption key is copy-protected. Since copy-protection is a stronger primitive than secure software leasing, this notion can be seen as a stronger cryptographic primitive than FE with secure key leasing. More specifically, our additional contribution is as follows.
> 
> We define the syntax and security definitions for SDFE.
> 
> We achieve collusion-resistant single-decryptor PKFE for \(\textsf{P}/\textsf{poly}\) from post-quantum indistinguishability obfuscation and quantum hardness of the learning with errors problem.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_20](https://doi.org/10.1007/978-3-031-22972-5_20)
## Classically Verifiable NIZK for QMA with Preprocessing.
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#classically-verifiable-nizk-for-qma-with-preprocessing)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#classically-verifiable-nizk-for-qma-with-preprocessing)
### Authors
* Tomoyuki Morimae, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, Yukawa Institute for Theoretical Physics, Kyoto University, Kyoto, Japan
* Takashi Yamakawa, NTT Social Informatics Laboratories, Tokyo, Japan
### Abstract
> We propose three constructions of classically verifiable non-interactive zero-knowledge proofs and arguments (CV-NIZK) for \(\textbf{QMA}\) in various preprocessing models.
> 
> 1. We construct a CV-NIZK for \(\textbf{QMA}\) in the quantum secret parameter model where a trusted setup sends a quantum proving key to the prover and a classical verification key to the verifier. It is information theoretically sound and zero-knowledge.
> 
> 2. Assuming the quantum hardness of the learning with errors problem, we construct a CV-NIZK for \(\textbf{QMA}\) in a model where a trusted party generates a CRS and the verifier sends an instance-independent quantum message to the prover as preprocessing. This model is the same as one considered in the recent work by Coladangelo, Vidick, and Zhang (CRYPTO ’20). Our construction has the so-called dual-mode property, which means that there are two computationally indistinguishable modes of generating CRS, and we have information theoretical soundness in one mode and information theoretical zero-knowledge property in the other. This answers an open problem left by Coladangelo et al., which is to achieve either of soundness or zero-knowledge information theoretically. To the best of our knowledge, ours is the first dual-mode NIZK for \(\textbf{QMA}\) in any kind of model.
> 
> 3. We construct a CV-NIZK for \(\textbf{QMA}\) with quantum preprocessing in the quantum random oracle model. This quantum preprocessing is the one where the verifier sends a random Pauli-basis states to the prover. Our construction uses the Fiat-Shamir transformation. The quantum preprocessing can be replaced with the setup that distributes Bell pairs among the prover and the verifier, and therefore we solve the open problem by Broadbent and Grilo (FOCS ’20) about the possibility of NIZK for \(\textbf{QMA}\) in the shared Bell pair model via the Fiat-Shamir transformation.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_21](https://doi.org/10.1007/978-3-031-22972-5_21)
## General Properties of Quantum Bit Commitments (Extended Abstract).
🌍 **[English](../../../docs/en/Asiacrypt/Asiacrypt[2022-4].md#general-properties-of-quantum-bit-commitments-extended-abstract)** | [简体中文](../../../docs/zh-CN/Asiacrypt/Asiacrypt[2022-4].md#general-properties-of-quantum-bit-commitments-extended-abstract)
### Authors
* Jun Yan, Jinan University, Guangzhou, China
### Abstract
> While unconditionally-secure quantum bit commitment (allowing both quantum computation and communication) is impossible, researchers turn to study the complexity-based one, a.k.a. computational quantum bit commitment. A computational canonical (non-interactive) quantum bit commitment scheme refers to a kind of schemes such that the commitment consists of just a single (quantum) message from the sender to the receiver that later can be opened by uncomputing the commit stage. In this work, we study general properties of computational quantum bit commitments through the lens of canonical quantum bit commitments. Among other results, we in particular obtain the following two:
> 
> 1. Any computational quantum bit commitment scheme can be converted into the canonical (non-interactive) form (with its sum-binding property preserved).
> 
> 2. Two flavors of canonical quantum bit commitments are equivalent; that is, canonical computationally-hiding statistically-binding quantum bit commitment exists if and only if the canonical statistically-hiding computationally-binding one exists. Combining this result with the first one, it immediately implies (unconditionally) that computational quantum bit commitment is symmetric.
> 
> Canonical quantum bit commitments can be based on quantum-secure one-way functions or pseudorandom quantum states. But in our opinion, the formulation of canonical quantum bit commitment is so clean and simple that itself can be viewed as a plausible complexity assumption as well. We propose to explore canonical quantum bit commitment from perspectives of both quantum cryptography and quantum complexity theory in the future.

### Links
- **URL:** [https://doi.org/10.1007/978-3-031-22972-5_22](https://doi.org/10.1007/978-3-031-22972-5_22)
